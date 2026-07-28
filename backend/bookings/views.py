from django.shortcuts import render

from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Room, Booking
from .serializers import RoomSerializer, CreateBookingSerializer, BookingListSerializer
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from datetime import date

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

class CancelBookingView(APIView):
    permission_classes=[IsAuthenticated]

    def patch(self, request, pk):
        booking = get_object_or_404(Booking, id=pk, user=request.user)

        if booking.status == 'CANCELLED':
            return Response(
                {"detail": "This booking is already cancelled."}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        if booking.check_in_date <= date.today():
            return Response(
                {"detail": "You cannot cancel a booking on or after the check-in date."}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        booking.status = 'CANCELLED'
        booking.save()

        return Response(
            {"detail": "Booking successfully cancelled."}, 
            status=status.HTTP_200_OK
        )