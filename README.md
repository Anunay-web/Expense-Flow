# ExpenseFlow Backend

## Overview

ExpenseFlow is an **enterprise-style expense management backend** built with the **MERN stack (Node.js, Express, MongoDB)**.

The system allows employees to submit expenses, managers to approve or reject them, and administrators to monitor analytics.

This project demonstrates **authentication, role-based access control, workflow management, and RESTful API design**.

---

# Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt
* express-validator
* Morgan (logging)

---

# Features

## Authentication

* User registration
* User login
* Password hashing using bcrypt
* JWT-based authentication

## Role Based Access Control

* Employee
* Manager
* Admin

## Expense Management

* Submit expenses
* Update expenses
* Delete expenses
* View personal expense history

## Manager Workflow

* View pending expenses
* Approve expenses
* Reject expenses

## Admin / Manager Dashboard

* View all expenses
* Expense analytics statistics

## Advanced Backend Features

* Pagination
* Filtering
* MongoDB aggregation
* Input validation
* Centralized error handling
* Request logging

---

# API Endpoints

## Authentication

POST /api/auth/register
POST /api/auth/login

---

## Employee

POST /api/expenses/submit
GET /api/expenses/my-expenses
PUT /api/expenses/:id
DELETE /api/expenses/:id

---

## Manager

GET /api/expenses
GET /api/expenses/pending
PATCH /api/expenses/:id/approve
PATCH /api/expenses/:id/reject

---

## Admin / Manager

GET /api/expenses/stats

---

# Project Structure

```
ExpenseFlow Backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   └── expenseController.js
│
├── middleware
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   ├── validationMiddleware.js
│   └── errorMiddleware.js
│
├── models
│   ├── userModel.js
│   └── expenseModel.js
│
├── routes
│   ├── auth.route.js
│   └── expense.route.js
│
├── app.js
└── index.js
```

---

# Installation

Clone the repository

```
git clone <your-repo-url>
```

Install dependencies

```
npm install
```

Run the server

```
nodemon
```

---

# Environment Variables

Create a `.env` file

```
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

# Future Improvements

* Expense receipt upload (Multer + Cloudinary)
* Email notifications
* Swagger API documentation
* Rate limiting
* Security enhancements

---

# Author

Anunay Kumar
B.Tech CSE Student
Backend Developer (MERN Stack)
