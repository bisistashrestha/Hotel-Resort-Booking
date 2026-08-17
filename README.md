# Hotel Booking Web

A full-stack resort booking application for browsing available rooms, creating reservations, and managing trips. The project uses Django REST Framework for the backend API and Next.js for the frontend experience.

This repository is being developed as a portfolio project focused on clean API design, authentication, booking logic, and a modern frontend flow.

## Project overview

The app includes:

- custom email-based authentication
- JWT-based API security
- room listing with availability filtering by date
- booking creation with total price calculation
- trip history and cancellation flow
- Django admin for managing rooms, users, and bookings
- OpenAPI schema and Swagger docs for backend testing

## Tech stack

### Backend

- Python 3
- Django 6
- Django REST Framework
- DRF Spectacular
- SimpleJWT
- PostgreSQL via dj-database-url
- WhiteNoise

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Project structure

```text
Hotel-Booking-Web/
├── backend/
│   ├── bookings/
│   ├── config/
│   ├── users/
│   ├── db.sqlite3
│   ├── manage.py
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── eslint.config.mjs
├── LICENSE
├── README.md
└── Notes/
```

## Main API routes

### Authentication

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | /api/users/register/ | Register a new user |
| POST | /api/users/login/ | Obtain JWT tokens |
| POST | /api/users/token/refresh/ | Refresh JWT tokens |
| GET | /api/users/profile/ | Fetch authenticated user profile |

### Rooms

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | /api/bookings/rooms/ | List available room types |

Query parameters:

- check_in: YYYY-MM-DD
- check_out: YYYY-MM-DD

Example:

```bash
http://127.0.0.1:8000/api/bookings/rooms/?check_in=2026-08-10&check_out=2026-08-15
```

### Bookings

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | /api/bookings/book/ | Create a booking |
| GET | /api/bookings/my-trips/ | View current user bookings |
| PATCH | /api/bookings/<booking_id>/cancel/ | Cancel an upcoming booking |

### API documentation

- Schema: /api/schema/
- Swagger UI: /api/docs/

## Local setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Hotel-Booking-Web
```

### 2. Create and activate a virtual environment

Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

macOS/Linux:

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install backend dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 4. Configure environment variables

Create a `.env` file in the backend folder.

```env
SECRET_KEY=your-secret-key
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
ALLOWED_HOSTS=127.0.0.1,localhost
```

For PostgreSQL, you can use a full PostgreSQL connection string instead of SQLite.

### 5. Apply database migrations

```bash
python manage.py migrate
```

### 6. Create a superuser

```bash
python manage.py createsuperuser
```

### 7. Run the backend

```bash
python manage.py runserver
```

The backend will be available at:

```text
http://127.0.0.1:8000
```

### 8. Run the frontend

Open a second terminal and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

## Admin access

After creating a superuser, log in to:

```text
http://127.0.0.1:8000/admin/
```

## Notes

- The backend is set up with custom user authentication and JWT support.
- Room availability filtering prevents overlapping bookings for active reservations.
- Booking totals are calculated as check-out date minus check-in date multiplied by nightly rate.
- The app is intended for a single resort / hotel brand experience.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.


---

# 📋 Roadmap

### Backend

* [x] Custom User Model
* [x] JWT Authentication
* [x] Room API
* [x] Booking API
* [x] Booking Cancellation
* [x] Double-booking Prevention
* [x] API Documentation (Swagger/OpenAPI)
* [x] Automated Tests (in Postman)

### Frontend

* [ ] Authentication UI
* [ ] Home Page
* [ ] Room Listing
* [ ] Room Details
* [ ] Booking Flow
* [ ] User Dashboard
* [ ] Booking History
* [ ] Responsive Design

### Future Features

* Payment Gateway Integration
* Email Notifications
* Room Images
* Reviews & Ratings
* Resort Analytics Dashboard
* Invoice Generation
* Availability Calendar

---

# 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License. See the **LICENSE** file for details.

---

# 👨‍💻 Author

**Bisista Shrestha**

Computer Science & Engineering Student

**Current Focus**

* Django REST Framework
* PostgreSQL
* Next.js
* Full-Stack Web Development

If you found this project helpful, consider giving it a ⭐ on GitHub.
