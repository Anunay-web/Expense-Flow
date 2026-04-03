# 🚀 ExpenseFlow Backend

The ExpenseFlow Backend is a RESTful API built with Node.js and Express that powers a role-based expense management system. It handles authentication, authorization, expense workflows, file uploads, and analytics.

🔗 Frontend Repository: https://github.com/Anunay-web/Expense-Flow-Frontend.git

---

## 🧠 Overview

This backend is designed to simulate a real-world enterprise system where:

* Employees submit expenses
* Managers review and approve/reject requests
* Admins monitor the entire system and manage users

It follows a clean MVC architecture and includes secure authentication, role-based access control, and scalable API design.

---

## ✨ Features

* JWT Authentication
* Role-based access control (Employee, Manager, Admin)
* Expense CRUD operations
* Manager approval/rejection workflow
* Pagination, filtering, and search
* Expense analytics (aggregation)
* Receipt upload (Multer + Cloudinary)
* Input validation
* Centralized error handling

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Cloudinary
* Multer

---

## 📂 Folder Structure

```id="z7n5yx"
backend/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── middleware/
 └── config/
```

---

## 🚀 Getting Started

```bash id="e1k3mf"
git clone https://github.com/Anunay-web/Expense-Flow.git
cd expenseflow-backend
npm install
npm run dev
```

---

## ⚙️ Environment Variables

```id="1r96fc"
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

---

## 📌 API Endpoints

### Auth

* POST /api/auth/login
* POST /api/auth/register

### Expenses

* POST /api/expenses/submit
* GET /api/expenses/my-expenses
* GET /api/expenses
* GET /api/expenses/pending
* PATCH /api/expenses/:id/approve
* PATCH /api/expenses/:id/reject

---

## 🌐 Deployment

(Add Render link later)

---

## 👨‍💻 Author

**Anunay Kumar**
