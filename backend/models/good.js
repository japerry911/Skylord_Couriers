const mongoose = require('mongoose');
const Joi = require('joi');

const goodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    weight: {
        type: Number,
        required: true,
        min: 0.01,
        max: 1000
    }
});

const Good = mongoose.model('Good', goodSchema);

function validateGood(good) {
    const schema = {
        name: Joi.string().min(2).max(100).required(),
        weight: Joi.number().min(0.01).max(1000).required()
    };

    return Joi.validate(good, schema);
}

module.exports.Good = Good;
module.exports.validateGood = validateGood;
module.exports.goodSchema = goodSchema;