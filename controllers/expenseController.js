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

exports.getMyExpenses = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const filter = {
        submittedBy: req.user._id
    }
    if(req.query.status){
        filter.status = req.query.status;
    }
    const expenses = await Expense.find(filter).skip(skip).limit(limit);
    const total = await Expense.countDocuments(filter);
    res.status(200).json({
        success: true,
        page,
        totalPages: Math.ceil(total / limit),
        totalExpenses: total,
        expenses
    })
} 
  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

exports.getPendingExpense = async (req,res)=>{
    try{
        const expenses = await Expense.find({status: 'Submitted'}).populate("submittedBy","name email");

        res.status(200).json({
            success: true,
            count: expenses.length,expenses
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.approveExpense = async (req,res)=>{
    try{
        const expense = await Expense.findByIdAndUpdate(req.params.id,
            {
                status: "Approved",
                approvedBy: req.user._id
            },
            {
                new: true
            }
        );
        if(!expense){
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Expense Approved",
            expense
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.rejectExpense = async (req,res)=>{
    try{
        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            {
                status: "Rejected",
                approvedBy: req.user._id
            },
            {new: true}
        )
        if(!expense){
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Expense rejected",
            expense
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}