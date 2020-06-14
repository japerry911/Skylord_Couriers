const mongoose = require('mongoose');
const Joi = require('joi');
const { goodSchema } = require('./good');

const shipmentSchema = new mongoose.Schema({
    courier: {
        type: new mongoose.Schema({
            username: {
                type: String,
                minlength: 6,
                maxlength: 30,
                required: true,
            }
        })
    },
    shipper: {
        type: new mongoose.Schema({
            username: {
                type: String,
                minlength: 6,
                maxlength: 30,
                required: true,
            }
        })
    },
    price: {
        type: Number,
        required: true,
        min: 1.00,
        max: 10000
    },
    postDate: {
        type: Date,
        default: Date.now()
    },
    startDate: {
        type: Date
    },
    deliveredDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ['Not Claimed', 'Pending Delivery', 'Successful Delivery', 'Failed Delivery'],
        required: true
    },
    comments: {
        type: String,
        default: 'n/a'
    },
    goods: [
        {
            type: goodSchema,
            ref: 'Good',
            required: true
        }
    ]
});

const Shipment = mongoose.model('Shipment', shipmentSchema);

function validateShipment(shipment) {
    const schema = Joi.object().keys({
        courierId: Joi.objectId(),
        shipperId: Joi.objectId().disallow(Joi.ref('courierId')),
        price: Joi.number().min(1.00).max(10000).required(),
        startDate: Joi.date(),
        endDate: Joi.date(),
        postDate: Joi.date(),
        startDate: Joi.date(),
        deliveredDate: Joi.date(),
        status: Joi.string().valid(['Not Claimed', 'Pending Delivery', 'Successful Delivery', 'Failed Delivery']).required(),
        comments: Joi.string(),
        goodIds: Joi.array().items(Joi.string()).required()
    }).or('courierId', 'shipperId');

    return Joi.validate(shipment, schema);
}

module.exports.Shipment = Shipment;
module.exports.validateShipment = validateShipment;
module.exports.shipmentSchema = shipmentSchema;