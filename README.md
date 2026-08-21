# Yama Kaze - Resort Booking Web App

A full-stack resort booking application built during an internship(@CloudOnHire). Guests can browse available rooms, make reservations, and manage their trips through a clean, modern interface.

**Live demo:** [frontend on Vercel](https://hotel-resort-booking-66l2.vercel.app/) · [API on Render](https://hotel-booking-n19u.onrender.com/api/bookings/rooms/)

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Backend | Python · Django 6 · Django REST Framework · SimpleJWT · DRF Spectacular |
| Frontend | Next.js 16.2 · React 19.2 · TypeScript · Tailwind CSS 4 |
| Database | SQLite (dev) · PostgreSQL (prod) |
| Deployment | Render (backend) · Vercel (frontend) |

---

## Features

- Email-based authentication with **HttpOnly cookie JWT** (no localStorage exposure)
- Room availability filtering by check-in / check-out date
- Booking creation with automatic total price calculation
- Trip history and cancellation (blocked on or after check-in date)
- Django Admin for managing rooms, users, and bookings
- Swagger UI and OpenAPI schema for API exploration

---

## Room Types

| Room | Description |
|---|---|
| Cedar Room | Cozy forest-facing room |
| Kaide Suite | Spacious suite with balcony |
| Pine Villa | Private villa surrounded by trees |
| Moss Residence | Premium family residence |
| Summit Suite | Best mountain views |
| Canopy Villa | Elevated forest retreat |
| Sora Suite | Sky view retreat |

---

## API Reference

Base URL (production): `https://your-api.onrender.com`

### Auth — `/api/users/`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register/` | Register a new user |
| POST | `/login/` | Login and set auth cookies |
| POST | `/logout/` | Clear auth cookies |
| POST | `/token/refresh/` | Rotate access token via cookie |
| GET | `/profile/` | Get authenticated user profile |

### Rooms & Bookings — `/api/bookings/`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/rooms/` | List rooms — filter with `?check_in=YYYY-MM-DD&check_out=YYYY-MM-DD` |
| POST | `/book/` | Create a booking |
| GET | `/my-trips/` | View current user's bookings |
| PATCH | `/<id>/cancel/` | Cancel an upcoming booking |

> Swagger UI: `/api/docs/` · Raw schema: `/api/schema/`

---

## Project Structure

```text
Hotel-Booking-Web/
├── backend/
│   ├── bookings/    # Room & Booking models, views, serializers
│   ├── users/       # Custom email-based user, cookie auth
│   ├── config/      # Django settings
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   └── src/
│       ├── app/         # Pages: rooms, booking, checkout, my-trips, login, register …
│       ├── components/  # Navbar, Footer, Hero, RoomCard …
│       └── lib/         # API client, room helpers
└
```

---

## Local Setup

**Prerequisites:** Python 3.10+ · Node.js 18+ · npm

### Backend

```bash
# Clone the repo
git clone <your-repository-url>
cd Hotel-Booking-Web

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # macOS / Linux

# Install and run
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver   # http://127.0.0.1:8000
```

Create `backend/.env`:

```env
SECRET_KEY=your-secret-key
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=127.0.0.1,localhost
```

### Frontend

```bash
# In a new terminal
cd frontend
npm install
npm run dev                  # http://localhost:3000
```

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Django Admin → `http://127.0.0.1:8000/admin/`

---

## Future Work

- Payment gateway integration
- Email notifications for bookings and cancellations
- Room image uploads
- Guest reviews and ratings
- Availability calendar
- Invoice / PDF receipt generation
- Resort analytics dashboard

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

## Author

**Bisista Shrestha** · Computer Science & Engineering Student · Internship Project(@CloudOnHire)

Django REST Framework · PostgreSQL · Next.js · Full-Stack Web Development
