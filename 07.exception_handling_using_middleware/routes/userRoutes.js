const express = require('express');
const AppError = require('../utils/appError');
const asyncHandler = require('express-async-handler'); // Handles async errors automatically
const users = require('../models/User');

const router = express.Router();

// ✅ Get All Users
router.get('/', asyncHandler(async (req, res) => {
    res.json({ success: true, users });
}));

// ✅ Get User by ID
router.get('/:id', asyncHandler(async (req, res, next) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return next(new AppError("User not found", 404));
    }

    res.json({ success: true, user });
}));

// ✅ Simulated Internal Server Error
router.get('/error/test', (req, res, next) => {
    throw new Error("Something went wrong!");
});

module.exports = router;
