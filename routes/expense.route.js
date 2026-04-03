const express = require('express');
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const { createExpense, getPendingExpense, approveExpense, rejectExpense,getMyExpenses, getExpenseStats, submitExpense, getAllExpenses, updateExpense, deleteExpense, getMyExpenseStats} = require('../controllers/expenseController');
const {validateRequest} = require("../middleware/validationMiddleware")
const { validateExpense } = require("../middleware/expenseValidation");
const { protect } = require('../middleware/authMiddleware');
const authorizeRoles = require("../middleware/roleMiddleware");

router.post(
  "/submit",
  protect,
  upload.single("receipt"), 
  submitExpense             
);

router.get("/my-expenses", protect, getMyExpenses);

router.get("/my-stats", protect, getMyExpenseStats);

router.get("/pending", protect, authorizeRoles("manager"),getPendingExpense);

router.patch("/:id/approve", protect, authorizeRoles("manager"), approveExpense);

router.patch("/:id/reject", protect, authorizeRoles("manager"), rejectExpense);

router.get("/stats", protect, authorizeRoles("admin","manager"), getExpenseStats);

router.get("/", protect, authorizeRoles("admin", "manager"), getAllExpenses);

router.put("/:id", protect, updateExpense);

router.delete("/:id", protect, deleteExpense);

module.exports = router;
