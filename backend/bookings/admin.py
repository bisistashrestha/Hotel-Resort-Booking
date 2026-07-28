from django.contrib import admin
from .models import Room, Booking

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    # list_display controls the columns you see in the admin table
    list_display = ("room_number", "room_type", "capacity", "price_per_night")
    # list_filter adds a sidebar to filter the data (e.g., "Show me only Villas")
    list_filter = ("room_type",)

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ("user", "room", "check_in_date", "check_out_date", "status", "total_price")
    list_filter = ("status", "check_in_date")
    readonly_fields = ("total_price",)