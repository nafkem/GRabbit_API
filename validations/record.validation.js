// validation/recordValidation.js
const { body } = require('express-validator');

// Validation rules for creating a new record
exports.validateRecord = [
    body('breed').notEmpty().withMessage('Breed is required'),
    body('rabbitName').notEmpty().withMessage('Rabbit name is required'),
    body('crossedDate').isISO8601().withMessage('Crossed date must be a valid date'),
    body('endDate').isISO8601().withMessage('End date must be a valid date'),
    body('deliveryDate').isISO8601().withMessage('Delivery date must be a valid date'),
    body('kindled').isBoolean().withMessage('Kindled must be a boolean value'),
];

// Validation rules for user registration or other endpoints can be added similarly
