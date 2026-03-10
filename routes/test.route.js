const express = require('express');
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get('/employee', protect ,authorize("employee","admin","manager"), (req, res) => {
    res.json({message: "Employee route accessed"});

});

router.get('/manager', protect, authorize("manager","admin"), (req, res) => {
    res.json({message: "Manager route accessed"});
});

router.get('/admin', protect, authorize("admin"), (req, res) => {
    res.json({message: "Admin route accessed"});
});

module.exports = router;