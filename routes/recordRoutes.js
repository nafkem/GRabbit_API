const express = require('express');
const { addRecord, getRecords } = require('../controllers/recordController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, addRecord); // Add a record
router.get('/', authMiddleware, getRecords); // Get all records

module.exports = router;
