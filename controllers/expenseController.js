const Expense = require('../models/expense');
const cloudinary = require('../config/cloudinary'); 
const streamifier = require("streamifier");
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
        next(error);
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
    if (req.query.category) {
      filter.category = req.query.category;
    }
    if (req.query.search) {
  filter.title = { $regex: req.query.search, $options: "i" };
}
    
    const expenses = await Expense.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit);
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
    next(error);
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
        next(error);
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
        next(error);
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
        next(error);
    }
}

exports.getExpenseStats = async (req,res)=>{
    try{
        const stats = await Expense.aggregate([
            {
                $group: {
                    _id: "$status",
                    count: {
                        $sum: 1
                    },
                    totalAmount: {
                        $sum: "$amount"
                    }
                }
            }
        ])
        res.status(200).json({
            success: true,
            stats
        })
    }
    catch(error){
        next(error);
    }
}

exports.getMyExpenseStats = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const expenses = await Expense.find({ submittedBy: userId });

    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    const approved = expenses
      .filter(e => e.status === "Approved")
      .reduce((sum, e) => sum + e.amount, 0);

    const pending = expenses
      .filter(e => e.status === "Submitted")
      .reduce((sum, e) => sum + e.amount, 0);

    res.json({
      total,
      approved,
      pending
    });

  } catch (error) {
    next(error);
  }
};



exports.submitExpense = async (req, res, next) => {
  try {
    const { title, description, amount, category } = req.body;

    let receiptUrl = "";

    if (req.file) {
      console.log("Uploading to Cloudinary...");

      const streamUpload = () => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "expense_receipts" },
            (error, result) => {
              if (error) {
                console.log("Cloudinary Error:", error);
                reject(error);
              } else {
                console.log("Upload Success:", result.secure_url);
                resolve(result);
              }
            }
          );

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
      };

      const result = await streamUpload();
      receiptUrl = result.secure_url;
    }

    const expense = await Expense.create({
      title,
      description,
      amount,
      category,
      receipt: receiptUrl,
      submittedBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Expense submitted successfully",
      expense,
    });
    console.log("REQ.FILE:", req.file);

  } catch (error) {
    next(error);
  }
};
exports.getAllExpenses = async (req,res) => {
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const filter = {};
    if (req.query.status) {
      filter.status = req.query.status;
    }
    const expenses = await Expense.find(filter)
      .populate("submittedBy", "name email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    const total = await Expense.countDocuments(filter);
    res.status(200).json({
      success: true,
      page,
      totalPages: Math.ceil(total / limit),
      totalExpenses: total,
      expenses
    });

  } catch (error) {
    next(error);
  }
}

exports.updateExpense = async (req, res)=>{
    try{
        const expense = await Expense.findById(req.params.id);
        if(!expense){
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }
        if(expense.submittedBy.toString() !== req.user._id.toString()){
            return res.status(403).json({
                success: false,
                message: "Unauthorized"
            });
        }
        if(expense.status == "Approved"){
            return res.status(400).json({
                success: false,
                message: "Approved expenses cannot be updated"
            });

        }
        const {title, description, amount, category} = req.body;
        expense.title = title || expense.title;
        expense.description = description || expense.description;
        expense.amount = amount || expense.amount;
        expense.category = category || expense.category;
        const updatedExpense = await expense.save();
        res.status(200).json({
            success: true,
            message: "Expense updated successfully",
            expense: updatedExpense
        })
    }
    catch(error){
        next(error);
    }
}

exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found"
      })
    }
    if (expense.submittedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this expense"
      })
    }
    if (expense.status === "APPROVED") {
      return res.status(400).json({
        success: false,
        message: "Approved expense cannot be deleted"
      })
    }

    await expense.deleteOne();

    res.status(200).json({
      success: true,
      message: "Expense deleted successfully"
    });

  } catch (error) {
    next(error);
  }
}