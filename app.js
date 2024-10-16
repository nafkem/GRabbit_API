// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); 

const app = express();

// Middleware setup
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Route setup
app.use('/api/auth', authRoutes); // Ensure this line is correct

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
