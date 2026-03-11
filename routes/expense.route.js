const express = require('express');
const router = express.Router();

const { createExpense, getPendingExpense, approveExpense, rejectExpense,getMyExpenses } = require('../controllers/expenseController');
const { protect } = require('../middleware/authMiddleware');
const authorizeRoles = require("../middleware/roleMiddleware");

router.post("/submit", protect, createExpense);

router.get("/my-expenses", protect, getMyExpenses);

router.get("/pending", protect, authorizeRoles("manager"),getPendingExpense);

router.patch("/:id/approve", protect, authorizeRoles("manager"), approveExpense);

router.patch("/:id/reject", protect, authorizeRoles("manager"), rejectExpense)

module.exports = router;