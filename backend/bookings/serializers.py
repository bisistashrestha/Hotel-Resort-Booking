from rest_framework import serializers
from .models import Room, Booking
from datetime import date

class RoomSerializer(serializers.ModelSerializer):
    room_type_name = serializers.CharField(source='get_room_type_display', read_only=True)

    class Meta:
        model = Room
        fields = (
            "id", 
            "room_number", 
            "room_type", 
            "room_type_name", 
            "capacity", 
            "price_per_night", 
            "description"
        )

class CreateBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ("id", "room", "check_in_date", "check_out_date", "total_price", "status")
        read_only_fields = ("id", "total_price", "status")

    def validate(self, data):
        """
        This built-in DRF method runs BEFORE saving to the database.
        If we raise a ValidationError here, DRF automatically sends a 400 Bad Request to the frontend.
        """
        check_in = data['check_in_date']
        check_out = data['check_out_date']
        room = data['room']

        if check_in < date.today():
            raise serializers.ValidationError({"check_in_date": "You cannot book a room in the past."})

        if check_out <= check_in:
            raise serializers.ValidationError({"check_out_date": "Check-out must be after check-in."})

        overlapping_bookings = Booking.objects.filter(
            room=room,
            status__in=['PENDING', 'CONFIRMED'],
            check_in_date__lt=check_out,
            check_out_date__gt=check_in
        )

        if overlapping_bookings.exists():
            raise serializers.ValidationError({"dates": "This room is already booked for these dates."})

        return data

    def create(self, validated_data):
        """
        This runs after validate() succeeds. Here, we calculate the money and attach the user.
        """
        room = validated_data['room']
        check_in = validated_data['check_in_date']
        check_out = validated_data['check_out_date']

        # Calculate the exact number of nights
        nights = (check_out - check_in).days
        
        # Server-side math: nights * price per night
        calculated_price = nights * room.price_per_night

        # Grab the user securely from the JWT token context
        user = self.context['request'].user

        # Save the booking with our trusted calculations
        booking = Booking.objects.create(
            user=user,
            total_price=calculated_price,
            **validated_data
        )
        return booking


class BookingListSerializer(serializers.ModelSerializer):
    room_number=serializers.CharField(source='room.room_number', read_only=True)
    room_type=serializers.CharField(source='room.get_room_type_display', read_only=True)

    class Meta:
        model = Booking
        fields = (
            "id", 
            "room", 
            "room_number", 
            "room_type", 
            "check_in_date", 
            "check_out_date", 
            "total_price", 
            "status", 
            "created_at"
        )