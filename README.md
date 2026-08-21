# Hotel Booking Web

A full-stack resort booking application built with **Django REST Framework** and **Next.js**. Browse available rooms, make reservations, and manage your trips.

Built during an internship as a portfolio project focused on clean API design, JWT authentication, and a modern frontend flow.

## Tech Stack

**Backend:** Python · Django 6 · Django REST Framework · SimpleJWT · DRF Spectacular · SQLite / PostgreSQL

**Frontend:** Next.js 16.2 · React 19.2 · TypeScript · Tailwind CSS 4

## Project Structure

```text
Hotel-Booking-Web/
├── backend/
│   ├── bookings/    # Room & Booking models, views, serializers
│   ├── users/       # Custom email-based user model & auth
│   ├── config/      # Django project settings
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   └── src/
│       ├── app/         # Next.js pages (rooms, booking, my-trips, login, register …)
│       ├── components/  # Navbar, Footer, RoomCard, Hero …
│       └── lib/         # API client & room helpers
└── Notes/
```

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

## API Reference

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/register/` | Register a new user |
| POST | `/api/users/login/` | Obtain JWT tokens |
| POST | `/api/users/token/refresh/` | Refresh access token |
| GET | `/api/users/profile/` | Get authenticated user profile |

### Rooms & Bookings
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/bookings/rooms/` | List rooms — supports `?check_in=YYYY-MM-DD&check_out=YYYY-MM-DD` |
| POST | `/api/bookings/book/` | Create a booking |
| GET | `/api/bookings/my-trips/` | View current user's bookings |
| PATCH | `/api/bookings/<id>/cancel/` | Cancel a booking |

Swagger UI: `/api/docs/` · OpenAPI schema: `/api/schema/`

## Local Setup

**Prerequisites:** Python 3.10+ · Node.js 18+ · npm

```bash
# 1. Clone
git clone <your-repository-url>
cd Hotel-Booking-Web

# 2. Backend
python -m venv venv
venv\Scripts\activate          # Windows
# source venv/bin/activate     # macOS / Linux
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver     # → http://127.0.0.1:8000

# 3. Frontend (new terminal)
cd frontend
npm install
npm run dev                    # → http://localhost:3000
```

**Backend `.env`:**
```env
SECRET_KEY=your-secret-key
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=127.0.0.1,localhost
```

**Frontend `.env.local`:**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Django Admin: `http://127.0.0.1:8000/admin/`

## Future Work

- Payment gateway integration
- Email notifications for bookings and cancellations
- Room image uploads
- Guest reviews and ratings
- Availability calendar
- Invoice / PDF receipt generation
- Resort analytics dashboard

## License

MIT — see [LICENSE](LICENSE) for details.

## Author

**Bisista Shrestha** · Computer Science & Engineering Student · Internship Project

Django REST Framework · PostgreSQL · Next.js · Full-Stack Web Development
