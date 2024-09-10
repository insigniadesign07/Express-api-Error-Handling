// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// POST /users route with validation
router.post('/users', (req, res, next) => {
  const { name, email } = req.body;

  // Check if name and email are present
  if (!name || !email) {
    // Return 400 Bad Request error
    return res.status(400).json({
      error: {
        message: 'Name and email are required',
      },
    });
  }

  // If the fields are present, proceed with user creation
  res.status(201).json({
    message: 'User created successfully',
  });
});

// Add other user-related routes here if necessary

module.exports = router;
