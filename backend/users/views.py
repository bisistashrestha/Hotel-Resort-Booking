from django.conf import settings
from django.shortcuts import render

from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .serializers import UserRegistrationSerializer, UserProfileSerializer


class CookieTokenMixin:
    cookie_name = "access_token"
    refresh_cookie_name = "refresh_token"

    @property
    def cookie_options(self):
        # Local development should use plain HTTP with Lax cookies,
        # while production should use HTTPS and cross-site compatible None cookies.
        return {
            "httponly": True,
            "secure": not settings.DEBUG,
            "samesite": "None" if not settings.DEBUG else "Lax",
            "path": "/",
        }

    def set_auth_cookies(self, response, access_token, refresh_token=None):
        response.set_cookie(
            self.cookie_name,
            access_token,
            max_age=15 * 60,
            **self.cookie_options,
        )

        if refresh_token:
            response.set_cookie(
                self.refresh_cookie_name,
                refresh_token,
                max_age=7 * 24 * 60 * 60,
                **self.cookie_options,
            )

        return response


class LoginView(CookieTokenMixin, TokenObtainPairView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        if response.status_code != status.HTTP_200_OK:
            return response

        data = response.data
        access_token = data.get("access")
        refresh_token = data.get("refresh")

        if access_token:
            response = self.set_auth_cookies(response, access_token, refresh_token)

        return response


class CookieTokenRefreshView(CookieTokenMixin, TokenRefreshView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("refresh_token")
        if refresh_token and not request.data.get("refresh"):
            request.data = request.data.copy()
            request.data["refresh"] = refresh_token

        response = super().post(request, *args, **kwargs)

        if response.status_code != status.HTTP_200_OK:
            return response

        data = response.data
        access_token = data.get("access")

        if access_token:
            response = self.set_auth_cookies(response, access_token)

        return response


class LogoutView(CookieTokenMixin, APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        response = Response({"detail": "Logged out successfully."}, status=status.HTTP_200_OK)
        response.delete_cookie(
            self.cookie_name,
            path=self.cookie_options["path"],
            samesite=self.cookie_options["samesite"],
        )
        response.delete_cookie(
            self.refresh_cookie_name,
            path=self.cookie_options["path"],
            samesite=self.cookie_options["samesite"],
        )
        return response


class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data)


class RegisterView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = (AllowAny, )