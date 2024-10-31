// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Example route for user sign-up
router.post('/signup', (req, res) => {
    res.send('User signed up!');
});
router.get('/signin', (req, res) => {
    res.send('User signed in!');
});


// Export the router
module.exports = router;
