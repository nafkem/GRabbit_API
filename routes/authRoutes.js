// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Example route for user sign-up
router.post('/signup', (req, res) => {
    res.send('User signed up!');
});

// Export the router
module.exports = router;
