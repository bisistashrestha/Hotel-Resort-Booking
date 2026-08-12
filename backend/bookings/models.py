from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Room(models.Model):

    class RoomType(models.TextChoices):
        CEDAR = "CEDAR ROOM", "Cozy Forest Facing Room"
        KAEDE = "KAIDE SUIT", "Spacious Suite with Balcony"
        PINE = "PINE VILLA", "Private Villa Surrounded By Trees"
        MOSS = "MOSS RESIDENCE", "Premium Family Residence"
        SUMMIT = "SUMMIT SUITE", "Best Mountain Views"
        CANOPY = "CANOPY VILLA", "Elevated Forest Retreat"
        SORA = "SORA SUITE" , "Sky View Retreat"

    room_number = models.CharField(max_length=10, unique=True)

    room_type = models.CharField(
        max_length=20,
        choices=RoomType.choices,
        default=RoomType.CEDAR,
    )

    capacity = models.IntegerField(help_text="Maximum guests allowed")

    price_per_night = models.DecimalField(
        max_digits=8,
        decimal_places=2,
    )

    description = models.TextField(
        blank=True,
        null=True,
    )

    def __str__(self):
        return f"{self.get_room_type_display()} - Room {self.room_number}"

class Booking(models.Model):

    class Status(models.TextChoices):
        PENDING = "PENDING", "Pending"
        CONFIRMED = "CONFIRMED", "Confirmed"
        CANCELLED = "CANCELLED", "Cancelled"

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bookings")
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name="bookings")

    check_in_date = models.DateField()
    check_out_date = models.DateField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PENDING,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.check_out_date <= self.check_in_date:
            raise ValueError("Check-out date must be after check-in.")

        nights = (self.check_out_date - self.check_in_date).days
        self.total_price = nights * self.room.price_per_night

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user.email} -> {self.room.room_number} ({self.check_in_date})"
