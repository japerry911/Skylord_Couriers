const mongoose = require('mongoose');
const Joi = require('joi');

const shipmentGoodSchema = new mongoose.Schema({
    good: {
        type: new mongoose.Schema({
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
        }),
        required: true
    },
    shipment: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const ShipmentGood = mongoose.model('ShipmentGood', shipmentGoodSchema);

function validateShipmentGood(shipmentGood) {
    const schema = {
        goodId: Joi.objectId().required(),
        shipmentId: Joi.objectId().required()
    };

    return Joi.validate(shipmentGood, schema);
}

module.exports.ShipmentGood = ShipmentGood;
module.exports.validateShipmentGood = validateShipmentGood;