from django.shortcuts import render

from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Room, Booking
from .serializers import RoomSerializer, CreateBookingSerializer, BookingListSerializer
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated

class RoomListView(generics.ListAPIView):
    serializer_class = RoomSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = Room.objects.all()

        check_in = self.request.query_params.get('check_in')
        check_out = self.request.query_params.get('check_out')

        if check_in and check_out:
            overlapping_bookings = Booking.objects.filter(
                status__in=['PENDING', 'CONFIRMED'],
                check_in_date__lt=check_out,
                check_out_date__gt=check_in
            )

            booked_room_ids = overlapping_bookings.values_list('room_id', flat=True)

            queryset = queryset.exclude(id__in=booked_room_ids)

        return queryset

class CreateBookingView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = CreateBookingSerializer
    permission_classes = [IsAuthenticated] # The Bouncer is back

class UserBookingListView(generics.ListAPIView):
    serializer_class=BookingListSerializer
    permission_classes=[IsAuthenticated]

    def get_queryset(self):
        return self.request.user.bookings.all().order_by('-created_at')