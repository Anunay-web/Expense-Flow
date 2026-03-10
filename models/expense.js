const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["Travel","Food","Office","Other"],
        default: "Other"
    },
    receipt: {
        type: String
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["Submitted","Approved","Rejected","Reimbursed"],
        default: "Submitted"
    }
}, 
{timestamps: true}
)

module.exports = mongoose.model("Expense", expenseSchema);