# <p align="center">💎 AuditFlow | Enterprise Fiscal Orchestration</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production--Ready-emerald?style=for-the-badge&logo=statuspage" />
  <img src="https://img.shields.io/badge/Security-Identity--Verified-indigo?style=for-the-badge&logo=auth0" />
  <img src="https://img.shields.io/badge/V--1.0.4-AuditFlow-slate?style=for-the-badge" />
</p>

<p align="center">
  <kbd>
    <img src="https://komarev.com/ghpvc/?username=Anunay-web&label=SYSTEM%20TRAFFIC&color=indigo&style=flat-square" alt="AuditFlow Traffic" />
  </kbd>
</p>

<p align="center">
  <strong>AuditFlow</strong> is a high-performance, identity-verified RESTful API built to provide a secure "Control Plane" for corporate financial integrity.
</p>

---

## 🚀 System Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white" />
</p>

---

## 🧠 System Architecture Overview

<details>
<summary><b>📂 View Hierarchical Node Structure (Click to Expand)</b></summary>

| Node | Responsibility | Access Level |
| :--- | :--- | :--- |
| **👤 Employee** | Disbursement Logging & Evidence Upload | Restricted |
| **🛡️ Manager** | Programmatic Auditing & Reconciliation | Elevated |
| **⚙️ Admin** | Identity Provisioning & Global HUD | Root |

</details>

---

## ✨ Enterprise Features

- 🛡️ **Identity Provisioning:** RBAC secured via **JWT** and custom authorization middleware.
- 🔄 **Automated Audit Lifecycle:** Seamless state transitions (Submitted → Under Review → Settled).
- ⚠️ **Predictive Compliance:** Backend logic to flag high-risk or high-value transactions.
- 📧 **Email Orchestration:** Integrated **Nodemailer** for real-time approval alerts.
- 📸 **Evidence Management:** **Cloudinary + Multer** integration for immutable receipt storage.
- 📊 **HUD Analytics:** Advanced MongoDB aggregation pipelines for real-time financial insights.

---


## 📂 System Mapping <br>

backend/ <br>
 ├── config/        # Environment & DB Connectors <br>
 ├── middleware/    # Auth Gates & Error Handling <br>
 ├── models/        # Schemas (Users, Expenses, etc.) <br>
 ├── controllers/   # Business Logic <br>
 ├── routes/        # API Routes <br>
 └── services/      # Email Logic (Nodemailer) <br>

##⚙️ Deployment & Environment
# System Configuration 
PORT=3000 <br>
MONGO_URI=your_cluster_uri <br>
JWT_SECRET=your_system_secret <br>

# Evidence Management (Cloudinary)
CLOUDINARY_CLOUD_NAME=your_name <br>
CLOUDINARY_API_KEY=your_key <br>
CLOUDINARY_API_SECRET=your_secret <br>

# Email Service (Nodemailer)
SMTP_HOST=smtp.gmail.com <br>
SMTP_PORT=587 <br>
SMTP_USER=your_corporate_email <br>
SMTP_PASS=your_app_password <br>

## 📌 API Protocol

| Method | Endpoint                         | Description               | Access          |
|--------|----------------------------------|---------------------------|-----------------|
| POST   | /api/auth/login                  | Identity Verification     | Public          |
| POST   | /api/auth/register               | Identity Provisioning     | Admin           |
| POST   | /api/expenses/submit             | Log Disbursement          | Employee        |
| GET    | /api/expenses/my-expenses        | Personal Audit Trail      | Employee        |
| GET    | /api/expenses                    | Master System Audit       | Manager/Admin   |
| PATCH  | /api/expenses/:id/approve        | Authorize Disbursement    | Manager         |

## 👨‍💻 Author
Anunay Kumar <br>
B.Tech CSE | Full Stack Developer
