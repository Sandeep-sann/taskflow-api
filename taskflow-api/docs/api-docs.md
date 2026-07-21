# TaskFlow API Documentation

## Base URL

```
http://localhost:5000
```

For production:

```
https://your-render-url.onrender.com
```

---

# Authentication

## Register User

**Endpoint**

```
POST /auth/register
```

### Request Body

```json
{
  "name": "Sandeep",
  "email": "sandeep@example.com",
  "password": "password123"
}
```

### Success Response (201)

```json
{
  "success": true,
  "message": "User registered successfully.",
  "user": {
    "id": 1,
    "name": "Sandeep",
    "email": "sandeep@example.com"
  }
}
```

### Error Response (400)

```json
{
  "success": false,
  "message": "Email already registered."
}
```

---

## Login User

**Endpoint**

```
POST /auth/login
```

### Request Body

```json
{
  "email": "sandeep@example.com",
  "password": "password123"
}
```

### Success Response (200)

```json
{
  "success": true,
  "message": "Login successful.",
  "token": "JWT_TOKEN"
}
```

### Error Response (401)

```json
{
  "success": false,
  "message": "Invalid email or password."
}
```

---

# Categories

## Get Categories

**Endpoint**

```
GET /categories
```

### Headers

```
Authorization: Bearer JWT_TOKEN
```

### Success Response (200)

```json
[
  {
    "id": 1,
    "name": "Work"
  }
]
```

---

## Create Category

**Endpoint**

```
POST /categories
```

### Headers

```
Authorization: Bearer JWT_TOKEN
```

### Request Body

```json
{
  "name": "Work"
}
```

### Success Response (201)

```json
{
  "id": 1,
  "name": "Work"
}
```

---

## Update Category

**Endpoint**

```
PUT /categories/:id
```

### Headers

```
Authorization: Bearer JWT_TOKEN
```

### Request Body

```json
{
  "name": "Personal"
}
```

### Success Response (200)

```json
{
  "message": "Category updated successfully."
}
```

---

## Delete Category

**Endpoint**

```
DELETE /categories/:id
```

### Headers

```
Authorization: Bearer JWT_TOKEN
```

### Success Response (200)

```json
{
  "message": "Category deleted successfully."
}
```

---

# Tasks

## Get All Tasks

**Endpoint**

```
GET /tasks
```

### Headers

```
Authorization: Bearer JWT_TOKEN
```

### Success Response (200)

```json
[
  {
    "id": 1,
    "title": "Complete Assignment",
    "description": "Build TaskFlow API",
    "status": "pending",
    "categoryId": 1
  }
]
```

---

## Filter Tasks

### By Status

```
GET /tasks?status=pending
```

### By Category

```
GET /tasks?category=Work
```

### By Status and Category

```
GET /tasks?status=pending&category=Work
```

---

## Create Task

**Endpoint**

```
POST /tasks
```

### Headers

```
Authorization: Bearer JWT_TOKEN
```

### Request Body

```json
{
  "title": "Finish Backend",
  "description": "Complete Node.js API",
  "status": "pending",
  "dueDate": "2026-08-01",
  "categoryId": 1
}
```

### Success Response (201)

```json
{
  "id": 1,
  "title": "Finish Backend",
  "status": "pending"
}
```

---

## Update Task

**Endpoint**

```
PUT /tasks/:id
```

### Headers

```
Authorization: Bearer JWT_TOKEN
```

### Request Body

```json
{
  "title": "Finish Backend API",
  "description": "Updated Task",
  "status": "completed",
  "categoryId": 1
}
```

### Success Response (200)

```json
{
  "message": "Task updated successfully."
}
```

---

## Delete Task

**Endpoint**

```
DELETE /tasks/:id
```

### Headers

```
Authorization: Bearer JWT_TOKEN
```

### Success Response (200)

```json
{
  "message": "Task deleted successfully."
}
```

---

# Authentication

All protected endpoints require a JWT token.

Example:

```
Authorization: Bearer JWT_TOKEN
```

---

# HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# Validation Rules

### User

| Field | Validation |
|---------|------------|
| name | Required |
| email | Valid email |
| password | Minimum 6 characters |

### Category

| Field | Validation |
|---------|------------|
| name | Required |

### Task

| Field | Validation |
|---------|------------|
| title | Required |
| description | Optional |
| status | pending / completed |
| dueDate | Valid date |
| categoryId | Required |

---

# Technologies Used

- Node.js
- Express.js
- PostgreSQL (Supabase)
- Prisma ORM
- JWT Authentication
- Joi Validation
- bcryptjs
- CORS
- dotenv

---

# Author

**Jaya Naga Sandeep**

TaskFlow API – RESTful Backend Project
