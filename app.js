// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware for parsing JSON
app.use(express.json());

// Use the user routes
app.use(userRoutes);

// Catch-all for undefined routes (404 Not Found)
app.use((req, res, next) => {
  res.status(404).json({
    error: {
      message: 'Route not found',
    },
  });
});

// Centralized error-handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: {
      message: err.message,
    },
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
