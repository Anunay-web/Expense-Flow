# <p align="center">💎 AuditFlow | Enterprise Fiscal Orchestration</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Production--Ready-emerald?style=for-the-badge&logo=statuspage" />
  <img src="https://img.shields.io/badge/Security-Identity--Verified-indigo?style=for-the-badge&logo=auth0" />
  <img src="https://img.shields.io/badge/V--1.0.4-AuditFlow-slate?style=for-the-badge" />
</p>

<p align="center">
  <strong>AuditFlow</strong> is a high-performance, identity-verified RESTful API built to provide a secure "Control Plane" for corporate financial integrity. This backend facilitates an immutable audit trail, automated risk assessment, and hierarchical reconciliation workflows.
</p>

---

## 🚀 Built With

<p align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/Nodemailer-000?style=for-the-badge&logo=gmail&logoColor=white" />
</p>

---

## 🧠 System Architecture Overview

AuditFlow is engineered to simulate high-stakes corporate environments where data integrity and role-based accountability are paramount. 

* **👤 Employee Node:** Submits fiscal claims with encrypted digital evidence.
* **🛡️ Manager Node:** Conducts programmatic audits, reconciliation, and compliance flagging.
* **⚙️ Admin Node:** System-wide identity provisioning and global capital flow monitoring.

---

## ✨ Enterprise Features

* **🛡️ Identity Provisioning:** RBAC (Role-Based Access Control) secured via **JWT** and custom authorization gates.
* **🔄 Automated Audit Lifecycle:** Programmatic state transitions for disbursements (Submitted → Under Review → Settled).
* **⚠️ Predictive Compliance:** Backend logic to flag high-value or high-risk transactions for senior review.
* **📧 Email Orchestration:** Integrated **Nodemailer** system for real-time approval alerts and compliance notices.
* **📸 Evidence Management:** Seamless **Cloudinary** integration via **Multer** for immutable receipt storage.
* **📊 HUD Analytics:** High-speed MongoDB aggregation pipelines for real-time gross expenditure monitoring.

---

## 📂 System Mapping


backend/
 ├── ⚙️ config/        # Environment & DB Connectors
 ├── 🛡️ middleware/    # Auth Gates & Error Sanitization
 ├── 👤 models/        # Identity & Ledger Schemas
 ├── 🎮 controllers/   # Business Logic & Fiscal Workflows
 ├── 🛣️ routes/        # API Endpoints & URI Mapping
 └── 📧 services/      # Email Templates & Nodemailer Logic

##⚙️ Deployment & Environment
# System Configuration
PORT=3000
MONGO_URI=your_cluster_uri
JWT_SECRET=your_system_secret

# Evidence Management (Cloudinary)
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

# Email Service (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_corporate_email
SMTP_PASS=your_app_password

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
Anunay Kumar
B.Tech CSE | Full Stack Developer
