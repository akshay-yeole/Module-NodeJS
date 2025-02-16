const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Resource Not Found"
    });
};

module.exports = notFoundHandler;
