const AppError = require('../utils/appError');

const errorHandler = (err, req, res, next) => {
    console.error(`[ERROR] ${err.message}`);

    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    if (!err.isOperational) {
        // Handle unexpected errors (log it in real projects)
        console.error("Unexpected error:", err);
        message = "Something went wrong!";
    }

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
};

module.exports = errorHandler;
