const express = require('express');
const router = express.Router();

const { createExpense } = require('../controllers/expenseController');
const { protect } = require('../middleware/authMiddleware');

router.post("/submit", protect, createExpense);

module.exports = router;