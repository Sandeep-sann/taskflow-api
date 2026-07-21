# 🚀 TaskFlow API

TaskFlow API is a RESTful Task Management System built using **Node.js**, **Express.js**, **Prisma ORM**, and **PostgreSQL (Supabase)**. It allows users to register, log in securely using JWT authentication, manage categories, and perform CRUD operations on tasks.

---

## 📌 Features

- User Registration
- User Login with JWT Authentication
- Protected Routes using JWT Middleware
- Task CRUD Operations
- Category Management
- Filter Tasks by Status and Category
- Input Validation using Joi
- Prisma ORM
- PostgreSQL Database (Supabase)
- RESTful API
- Error Handling Middleware
- CORS Enabled

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Supabase
- Prisma ORM
- JWT (JSON Web Token)
- Joi Validation
- bcryptjs
- dotenv
- CORS

---

## 📂 Project Structure

```
taskflow-api/
│
├── controllers/
│   ├── authController.js
│   ├── taskController.js
│   └── categoryController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── validate.js
│   ├── errorHandler.js
│   └── notFound.js
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   └── categoryRoutes.js
│
├── validation/
│   ├── authValidation.js
│   ├── taskValidation.js
│   └── categoryValidation.js
│
├── docs/
│   ├── api-docs.md
│   └── postman-collection.json
│
├── config/
│   └── db.js
│
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/taskflow-api.git
```

```bash
cd taskflow-api
```

### Install Dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000

DATABASE_URL="YOUR_SUPABASE_DATABASE_URL"

JWT_SECRET=YOUR_SECRET_KEY
```

---

## 🗄️ Database Migration

Generate Prisma Client

```bash
npx prisma generate
```

Apply Database Migrations

```bash
npx prisma migrate dev --name init
```

---

## ▶️ Run the Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Server

```
http://localhost:5000
```

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /auth/register |
| POST | /auth/login |

---

## Categories

| Method | Endpoint |
|---------|----------|
| GET | /categories |
| POST | /categories |
| PUT | /categories/:id |
| DELETE | /categories/:id |

---

## Tasks

| Method | Endpoint |
|---------|----------|
| GET | /tasks |
| POST | /tasks |
| PUT | /tasks/:id |
| DELETE | /tasks/:id |

Task Filtering

```
GET /tasks?status=pending
```

```
GET /tasks?category=Work
```

---

## 🔐 Authentication

Protected routes require a JWT Token.

Example Header

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📮 Postman Collection

```
docs/postman-collection.json
```

Import the collection into Postman and test all endpoints.

---

## 📖 API Documentation

```
docs/api-docs.md
```

Contains request and response examples for every endpoint.

---

## 🌍 Live Deployment

Render Deployment URL

```
https://your-render-url.onrender.com
```

Replace this URL after deploying on Render.

---

## 📊 HTTP Status Codes

| Code | Meaning |
|------|---------|
|200|OK|
|201|Created|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|500|Internal Server Error|

---

## 👨‍💻 Author

**Jaya Naga Sandeep**

B.Tech CSE (AI & ML)

Backend Developer | Node.js | Express | PostgreSQL | Prisma

---

## 📄 License

This project is developed for educational purposes.
