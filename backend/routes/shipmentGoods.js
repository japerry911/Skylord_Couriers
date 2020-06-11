const shipper = require('../middleware/shipper');
const auth = require('../middleware/auth');
const { ShipmentGood, validateShipmentGood } = require('../models/shipmentGood');
const { Good } = require('../models/good');
const { Shipment } = require('../models/shipment');
const express = require('express');
const router = express.Router();

router.post('/', [auth, shipper], async (req, res) => {
    const { error } = validateShipmentGood(req.body);

    if (error) {
        const errors = error.details.map(errorObject => errorObject.message);
        return res.status(400).send(`Error(s): ${errors.join(', ')}`);
    }

    const good = await Good.findById(req.body.goodId);
    if (!good) {
        return res.status(400).send('Good Not Found.');
    }

    const shipment = await Shipment.findById(req.body.shipmentId);
    if (!shipment) {
        return res.status(400).send('Shipment Not Found.');
    }

    const shipmentGood = new ShipmentGood({});

    try {
        const result = await shipmentGood.save();
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(`Server Error: ${error}`);
    }
});

module.exports = router;