from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from .forms import CustomUserChangeForm, CustomUserCreationForm

# Register your models here.
@admin.register(User)
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    list_display=[
        "email",
        "first_name",
        "last_name",
        "phone_number",
        "is_staff",
        "is_active",
        "date_joined"
    ]
    search_fields=[
        "email",
        "first_name",
        "last_name",
        "phone_number"
    ]
    list_filter=[
        "is_staff",
        "is_active",
        "date_joined",
        "groups"
    ]
    ordering = ("-date_joined",)
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        ("Personal info", {"fields": ("first_name", "last_name","phone_number")}),
        ("Permissions", {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")}),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": ("email", "first_name", "last_name", "phone_number", "password1", "password2"),
        }),
    )
    readonly_fields = ("date_joined", "last_login")
