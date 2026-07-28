from django.urls import path
from .views import RoomListView, CreateBookingView, UserBookingListView, CancelBookingView

urlpatterns = [
    path('rooms/', RoomListView.as_view(), name='room-list'),
    path('book/', CreateBookingView.as_view(), name='create-booking'),
    path('my-trips/', UserBookingListView.as_view(), name='my-trips'),
    path('<int:pk>/cancel/', CancelBookingView.as_view(), name='cancel-booking'),
]