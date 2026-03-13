const { body } = require("express-validator");

exports.validateExpense = [
  body("title")
    .notEmpty()
    .withMessage("Title is required"),
  body("amount")
    .isNumeric()
    .withMessage("Amount must be a number"),
  body("category")
    .isIn(["Travel", "Food", "Office", "Other"])
    .withMessage("Invalid category")
];