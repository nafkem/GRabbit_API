// controllers/recordController.js
const Record = require('../models/Record');

// Add a new record
exports.addRecord = async (req, res) => {
    const { breed, rabbitName, crossedDate, endDate, deliveryDate, kindled } = req.body;
    try {
        const record = new Record({
            userId: req.userId,
            breed,
            rabbitName,
            crossedDate,
            endDate,
            deliveryDate,
            kindled
        });

        await record.save();
        res.status(201).json({ message: 'Record added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all records for the user
exports.getRecords = async (req, res) => {
    try {
        const records = await Record.find({ userId: req.userId });
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
