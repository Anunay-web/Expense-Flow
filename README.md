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

- 👤 **Employee Node:** Submits fiscal claims with encrypted digital evidence  
- 🛡️ **Manager Node:** Conducts programmatic audits, reconciliation, and compliance flagging  
- ⚙️ **Admin Node:** System-wide identity provisioning and global capital flow monitoring  

---

## ✨ Enterprise Features

- 🛡️ **Identity Provisioning:** RBAC secured via **JWT** and custom authorization middleware  
- 🔄 **Automated Audit Lifecycle:** State transitions (Submitted → Under Review → Settled)  
- ⚠️ **Predictive Compliance:** Flags high-risk or high-value transactions  
- 📧 **Email Orchestration:** Integrated **Nodemailer** for approval alerts & notifications  
- 📸 **Evidence Management:** **Cloudinary + Multer** for secure receipt storage  
- 📊 **HUD Analytics:** MongoDB aggregation pipelines for real-time financial insights  

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
Anunay Kumar
B.Tech CSE | Full Stack Developer
