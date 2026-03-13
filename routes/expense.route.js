const express = require('express');
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { createExpense, getPendingExpense, approveExpense, rejectExpense,getMyExpenses, getExpenseStats, submitExpense, getAllExpenses, updateExpense, deleteExpense} = require('../controllers/expenseController');
const { protect } = require('../middleware/authMiddleware');
const authorizeRoles = require("../middleware/roleMiddleware");

router.post("/submit", protect, upload.single("receipt"), submitExpense);

router.get("/my-expenses", protect, getMyExpenses);

router.get("/pending", protect, authorizeRoles("manager"),getPendingExpense);

router.patch("/:id/approve", protect, authorizeRoles("manager"), approveExpense);

router.patch("/:id/reject", protect, authorizeRoles("manager"), rejectExpense);

router.get("/stats", protect, authorizeRoles("admin","manager"), getExpenseStats);

router.get("/", protect, authorizeRoles("Admin", "Manager"), getAllExpenses);

router.put("/:id", protect, updateExpense);

router.delete("/:id", protect, deleteExpense);

module.exports = router;
