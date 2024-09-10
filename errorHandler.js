const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
  // Log error details
  logger.error(err);

  // Set default status code and message
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    error: {
      message: message,
    },
  });
};

module.exports = errorHandler;
