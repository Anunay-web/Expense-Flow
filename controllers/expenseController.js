const Expense = require('../models/expense');

exports.createExpense = async (req, res)=>{
    try{
        const {title, description, amount, category} =  req.body;
        const expense = await Expense.create({
            title,
            description,
            amount,
            category,
            submittedBy: req.user._id
        });
        res.status(201).json({
            success: true,
            message: "Expense Submitted Successfully",
            expense
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "Error submitting expense",
            error: error.message
        });
    }
}