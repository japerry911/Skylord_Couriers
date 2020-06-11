const { User } = require('../models/user');
const { validateShipment, Shipment } = require('../models/shipment');
const shipper = require('../middleware/shipper');
const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.post('/', [auth, shipper], async (req, res) => {
    const { error } = validateShipment(req.body);

    if (error) {
        const errors = error.details.map(errorObject => errorObject.message);
        return res.status(400).send(`Error(s): ${errors.join(', ')}`);
    }

    let shipUser = false;
    if (req.body.shipperId) {
        shipUser = await User.findById(req.body.shipperId);
        
        if (!shipUser) {
            return res.status(400).send('Shipper cannot be found.');
        }
    }

    let courierUser = false;
    if (req.body.courierId) {
        courierUser = await User.findById(req.body.courierId);

        if (!courierUser) {
            return res.status(400).send('Courier cannot be found.');
        }
    }

    const shipment = new Shipment({
        price: req.body.price,
        status: req.body.status,
    });

    if (shipUser) shipment.shipper = { _id: shipUser._id, username: shipUser.username };
    if (courierUser) shipment.courier = { _id: courierUser._id, username: courierUser.username };
    if (req.body.startDate) shipment.startDate = req.body.startDate;
    if (req.body.postDate) shipment.postDate = req.body.postDate;
    if (req.body.deliveredDate) shipment.deliveredDate = req.body.deliveredDate;
    if (req.body.comments) shipment.comments = req.body.comments;

    try {
        await shipment.save();
        res.send(shipment);
    } catch (error) {
        res.status(400).send(`Error: ${error}`);
    }
});

module.exports = router;