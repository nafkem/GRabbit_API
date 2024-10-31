// index.js
const express = require('express');
const mongoose = require('mongoose');
const recordRoutes = require('./routes/recordRoutes');
const authMiddleware = require('./middlewares/authMiddleware'); // Assuming you need it globally

// Create the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection (replace with your MongoDB URI)
mongoose.connect('mongodb+srv://nafkem:techy@myfirstproject.oxnro.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstProject', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Use routes
app.use('/api/record', recordRoutes); // Prefix all routes with /api/record

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
