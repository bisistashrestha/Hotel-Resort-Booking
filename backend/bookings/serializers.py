from rest_framework import serializers
from .models import Room, Booking
from datetime import date
from django.db import transaction

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
        check_in = data['check_in_date']
        check_out = data['check_out_date']

        if check_in < date.today():
            raise serializers.ValidationError({"check_in_date": "You cannot book a room in the past."})

        if check_out <= check_in:
            raise serializers.ValidationError({"check_out_date": "Check-out must be after check-in."})

        return data

    def create(self, validated_data):
        room_id = validated_data['room'].id
        check_in = validated_data['check_in_date']
        check_out = validated_data['check_out_date']
        user = self.context['request'].user

        with transaction.atomic():
            room = Room.objects.select_for_update().get(id=room_id)

            overlapping_bookings = Booking.objects.filter(
                room=room,
                status__in=[Booking.Status.PENDING, Booking.Status.CONFIRMED],
                check_in_date__lt=check_out,
                check_out_date__gt=check_in
            )

            if overlapping_bookings.exists():
                raise serializers.ValidationError(
                    {"dates": "Sorry, this room was just booked by someone else."}
                )

            nights = (check_out - check_in).days
            calculated_price = nights * room.price_per_night

            booking = Booking.objects.create(
                user=user,
                room=room,
                check_in_date=check_in,
                check_out_date=check_out,
                total_price=calculated_price
            )

        return booking


class BookingListSerializer(serializers.ModelSerializer):
    room_number = serializers.CharField(
        source="room.room_number",
        read_only=True
    )

    room_type_name = serializers.CharField(
        source="room.get_room_type_display",
        read_only=True
    )

    class Meta:
        model = Booking
        fields = (
            "id",
            "room",
            "room_number",
            "room_type_name",
            "check_in_date",
            "check_out_date",
            "total_price",
            "status",
            "created_at",
        )