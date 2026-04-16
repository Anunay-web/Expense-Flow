# 💎 AuditFlow | Enterprise Fiscal Orchestration Suite

**AuditFlow** is a high-performance, identity-verified RESTful API built to provide a secure "Control Plane" for corporate financial integrity. This backend facilitates an immutable audit trail, automated risk assessment, and hierarchical reconciliation workflows.

> **System Status:** Production Ready (v1.0.4)  
> **Frontend Repository:** [AuditFlow-Frontend](https://github.com/Anunay-web/Expense-Flow-Frontend.git)

---

## 🧠 System Architecture Overview

AuditFlow is engineered to simulate high-stakes corporate environments where data integrity and role-based accountability are paramount. The architecture is designed to handle distinct operational nodes:

* **Employee Node:** Submits fiscal claims with encrypted digital evidence.
* **Manager Node:** Conducts programmatic audits, reconciliation, and compliance flagging.
* **Admin Node:** System-wide identity provisioning and global capital flow monitoring.

The system follows a strict **MVC (Model-View-Controller)** pattern with centralized error handling and state-driven middleware.

---

## ✨ Enterprise Features

* **Identity Provisioning:** Role-based access control (RBAC) secured via **JWT** and custom authorization gates (Employee, Manager, Admin).
* **Automated Audit Lifecycle:** Programmatic state transitions for disbursements (Submitted → Under Review → Settled/Flagged).
* **Predictive Compliance:** Backend logic to flag high-value or high-risk transactions for senior review.
* **Email Orchestration (Nodemailer):** Integrated transactional mail system for approval alerts, rejection notifications, and session verification.
* **Digital Evidence Management:** Seamless integration with **Cloudinary** via **Multer** for immutable receipt storage.
* **Advanced HUD Analytics:** High-speed MongoDB aggregation pipelines for real-time spend distribution and gross expenditure monitoring.

---

## 🛠 Advanced Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Runtime** | Node.js (High-availability environment) |
| **Framework** | Express.js (RESTful architecture) |
| **Database** | MongoDB (NoSQL Document Store) |
| **ORM** | Mongoose (Schema validation & modeling) |
| **Security** | JWT & Bcrypt.js (Identity encryption) |
| **Mailing** | **Nodemailer** (Transactional SMTP integration) |
| **Evidence** | Multer & Cloudinary (Binary storage) |

---

## 📂 System Mapping

```bash
backend/
 ├── ⚙️ config/        # Environment configurations & Database connectors
 ├── 🛡️ middleware/    # Auth gates, Role verification & Error sanitization
 ├── 👤 models/        # Identity (User) & Financial Ledger (Expense) schemas
 ├── 🎮 controllers/   # Business logic & Fiscal audit workflows
 ├── 🛣️ routes/        # API endpoints & URI Mapping
 └── 📧 services/      # Email templates & Nodemailer logic
