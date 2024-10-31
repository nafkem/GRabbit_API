const Record = require('../models/Record');

// Function to add a new record
const addRecord = async (req, res) => {
    try {
        const newRecord = new Record({
            userId: req.user.id, // Assuming user ID comes from the auth middleware
            breed: req.body.breed,
            rabbitName: req.body.rabbitName,
            crossedDate: req.body.crossedDate,
            endDate: req.body.endDate,
            deliveryDate: req.body.deliveryDate,
            kindled: req.body.kindled
        });
        await newRecord.save();
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ message: 'Error adding record', error });
    }
};

// Function to get all records
const getRecords = async (req, res) => {
    try {
        const records = await Record.find({ userId: req.user.id });
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving records', error });
    }
};

module.exports = { addRecord, getRecords };
