from django.test import TestCase
from django.urls import reverse

from .models import User


class SecureCookieAuthenticationTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="alice@example.com",
            password="StrongPass123!",
            first_name="Alice",
            last_name="Test",
            phone_number="1234567890",
        )

    def test_login_sets_secure_http_only_cookies(self):
        response = self.client.post(
            reverse("login"),
            {"email": "alice@example.com", "password": "StrongPass123!"},
            content_type="application/json",
        )

        self.assertEqual(response.status_code, 200)
        self.assertIn("access_token", response.cookies)
        self.assertTrue(response.cookies["access_token"]["httponly"])
        self.assertTrue(response.cookies["access_token"]["secure"])
        self.assertEqual(response.cookies["access_token"]["samesite"], "Lax")

    def test_profile_endpoint_accepts_cookie_authentication(self):
        self.client.post(
            reverse("login"),
            {"email": "alice@example.com", "password": "StrongPass123!"},
            content_type="application/json",
        )

        response = self.client.get(reverse("profile"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["email"], "alice@example.com")
