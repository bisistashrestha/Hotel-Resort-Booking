# 🏨 Hotel Booking Web

A modern full-stack hotel booking platform built for a **single resort**, allowing guests to browse available rooms, make reservations, and manage their bookings through a secure REST API.

This project is being developed as a portfolio project to demonstrate best practices in backend development using **Django REST Framework** and frontend development using **Next.js**.

> **Project Status:** 🚧 In Active Development

---

## ✨ Features

### 👤 Authentication

* Custom User model
* Email-based authentication
* JWT Authentication
* Secure password hashing
* Password validation
* User profile management

### 🛏️ Room Management

* View all available rooms
* Room types and descriptions
* Capacity information
* Price per night
* Availability filtering using check-in and check-out dates

### 📅 Booking System

* Create bookings
* Automatic price calculation
* Prevent double bookings
* Transaction-safe booking creation using database locks
* View booking history
* Cancel upcoming bookings

### ⚙️ Admin Panel

* Custom Django Admin
* User management
* Room management
* Booking management
* Search, filtering, and ordering support

---

# 🛠️ Tech Stack

## Backend

* Python 3
* Django 6
* Django REST Framework
* JWT Authentication (SimpleJWT)
* PostgreSQL (Supabase)
* Gunicorn
* WhiteNoise

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

## Database

* PostgreSQL (Supabase)

## Deployment

| Service  | Platform |
| -------- | -------- |
| Backend  | Render   |
| Database | Supabase |
| Frontend | Planned  |

---

# 📂 Project Structure

```text
Hotel-Booking-Web/
│
├── backend/
│   ├── bookings/
│   ├── config/
│   ├── users/
│   ├── staticfiles/
│   ├── manage.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│
├── venv/
│
├── LICENSE
└── README.md
```

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint                    |
| ------ | --------------------------- |
| POST   | `/api/users/register/`      |
| POST   | `/api/users/login/`         |
| POST   | `/api/users/token/refresh/` |
| GET    | `/api/users/profile/`       |

---

## Rooms

| Method | Endpoint               |
| ------ | ---------------------- |
| GET    | `/api/bookings/rooms/` |

Query Parameters:

* `check_in`
* `check_out`

Example:

```http
GET /api/bookings/rooms/?check_in=2026-08-10&check_out=2026-08-15
```

---

## Bookings

| Method | Endpoint                             |
| ------ | ------------------------------------ |
| POST   | `/api/bookings/create/`              |
| GET    | `/api/bookings/my-bookings/`         |
| PATCH  | `/api/bookings/<booking_id>/cancel/` |

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/bisistashrestha/Hotel-Booking.git
cd Hotel-Booking-Web
```

---

## 2. Create a virtual environment

```bash
python -m venv venv
```

### Activate

**Windows**

```bash
venv\Scripts\activate
```

**macOS/Linux**

```bash
source venv/bin/activate
```

---

## 3. Install backend dependencies

```bash
cd backend
pip install -r requirements.txt
```

---

## 4. Configure environment variables

Create a `.env` file inside the `backend` directory.

```env
SECRET_KEY=your-secret-key

DEBUG=True

DATABASE_URL=your-postgresql-url

ALLOWED_HOSTS=127.0.0.1,localhost
```

---

## 5. Apply migrations

```bash
python manage.py migrate
```

---

## 6. Create an admin account

```bash
python manage.py createsuperuser
```

---

## 7. Start the backend server

```bash
python manage.py runserver
```

Backend:

```
http://127.0.0.1:8000
```

---

## 8. Start the frontend

```bash
cd ../frontend

npm install

npm run dev
```

Frontend:

```
http://localhost:3000
```

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
