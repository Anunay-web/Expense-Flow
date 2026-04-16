<h1 align="center">🚀 ExpenseFlow Backend</h1>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?size=22&duration=3000&color=00C2FF&center=true&vCenter=true&width=600&lines=Financial+Control+System+API;Role-Based+Expense+Management;Secure+%26+Scalable+Backend;Enterprise-Grade+Audit+Workflow" />
</p>

---

## 💎 Financial Control System API

A production-grade RESTful API built with **Node.js & Express**, powering a role-based financial workflow system with secure authentication, auditability, and scalable architecture.

🔗 **Frontend Repository:**  
https://github.com/Anunay-web/Expense-Flow-Frontend.git

---

## 🧠 System Overview

ExpenseFlow Backend is designed to simulate a **real-world enterprise financial system**, where:

- Employees submit expense claims with proof  
- Managers validate and approve/reject requests  
- Admins monitor system-wide financial activity  

The system emphasizes **data integrity, traceability, and secure workflows**, mimicking modern FinTech architectures.

---

## ✨ Core Features

### 🔐 Authentication & Security
- JWT-based Authentication  
- Role-Based Access Control (Employee, Manager, Admin)  
- Secure route protection & middleware  

### 💸 Expense Workflow
- Expense submission with receipt upload  
- Manager approval / rejection pipeline  
- Status tracking (Pending, Approved, Rejected)  

### 📊 Data & Analytics
- Aggregation-based expense insights  
- Pagination, filtering & search  
- Optimized query handling  

### 📁 File Handling
- Multer for file uploads  
- Cloudinary for secure cloud storage  

### 📧 Communication Layer
- Nodemailer integration for OTP verification & email notifications  

### ⚙️ System Design
- MVC Architecture  
- Centralized error handling  
- Input validation & sanitization  

---

## 🛠 Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js" />
</p>

**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Authentication:** JWT  
**File Storage:** Cloudinary, Multer  
**Communication:** Nodemailer  
**Architecture:** REST APIs, MVC Pattern  

---

## 📂 Project Structure

backend/
├── controllers/ # Business logic
├── routes/ # API routes
├── models/ # Database schemas
├── middleware/ # Auth & error handling
└── config/ # DB & cloud configs


⚙️ Environment Variables

Create a .env file in the root directory and add:

PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password

📌 API Endpoints

🔐 Auth
POST /api/auth/register
POST /api/auth/login

💸 Expenses
POST /api/expenses/submit
GET /api/expenses/my-expenses
GET /api/expenses (Admin)
GET /api/expenses/pending (Manager)
PATCH /api/expenses/:id/approve
PATCH /api/expenses/:id/reject


👨‍💻 Author
Anunay Kumar
B.Tech CSE | Full Stack Developer
