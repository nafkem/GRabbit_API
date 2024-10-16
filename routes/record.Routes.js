// routes/recordRoutes.js
const express = require('express');
const { addRecord, getRecords } = require('../controllers/recordController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/add', authMiddleware, addRecord);
router.get('/', authMiddleware, getRecords);

module.exports = router;
