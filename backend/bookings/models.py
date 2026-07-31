from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class RoomType(models.TextChoices):
    STANDARD = "STANDARD", "Standard Room"
    DELUXE = "DELUXE", "Ocean View Deluxe"
    VILLA = "VILLA", "Private Pool Villa"

class Status(models.TextChoices):
    PENDING = "PENDING", "Pending"
    CONFIRMED = "CONFIRMED", "Confirmed"
    CANCELLED = "CANCELLED", "Cancelled"

class Room(models.Model):
    room_number = models.CharField(max_length=10, unique=True)
    room_type = models.CharField(max_length=20,choices=RoomType.choices,default=RoomType.STANDARD,)
    capacity = models.IntegerField(help_text="Maximum guests allowed")
    price_per_night = models.DecimalField(max_digits=8, decimal_places=2)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.get_room_type_display()} - Room {self.room_number}"

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bookings")
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name="bookings")
    
    check_in_date = models.DateField()
    check_out_date = models.DateField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20,choices=Status.choices,default=Status.PENDING,)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} -> {self.room.room_number} ({self.check_in_date})"
