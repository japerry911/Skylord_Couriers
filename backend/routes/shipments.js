const { User } = require('../models/user');
const { Good } = require('../models/good');
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

    let goods = [];
    if (req.body.goodIds) {
        for (let i = 0; i < req.body.goodIds.length; i++) {
            const good = await Good.findById(req.body.goodIds[i]);

            if (!good) {
                return res.status(400).send(`Good ${req.body.goodIds[i]} Not Found.`);
            }

            goods.push(good);
        }
    }

    const shipment = new Shipment({
        price: req.body.price,
        status: req.body.status,
        goods
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

router.put('/:id', auth, async (req, res) => {
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

    let goods = [];
    if (req.body.goodIds) {
        for (let i = 0; i < req.body.goodIds.length; i++) {
            const good = await Good.findById(req.body.goodIds[i]);

            if (!good) {
                return res.status(400).send(`Good ${req.body.goodIds[i]} Not Found.`);
            }

            goods.push(good);
        }
    }

    const updatedShipmentBody = {
        price: req.body.price,
        status: req.body.status,
        goods
    };
    
    if (shipUser) updatedShipmentBody.shipper = { _id: shipUser._id, username: shipUser.username };
    if (courierUser) updatedShipmentBody.courier = { _id: courierUser._id, username: courierUser.username };

    if (req.body.startDate && req.body.startDate !== 'remove') {
        updatedShipmentBody.startDate = req.body.startDate;
    } else if (req.body.startDate === 'remove') {
        updatedShipmentBody.startDate = undefined;
    }

    if (req.body.postDate) updatedShipmentBody.postDate = req.body.postDate;

    if (req.body.deliveredDate && req.body.deliveredDate !== 'remove') {
        updatedShipmentBody.deliveredDate = req.body.deliveredDate;
    } else if (req.body.deliveredDate === 'remove') {
        updatedShipmentBody.deliveredDate = undefined;
    }

    if (req.body.comments && req.body.comments !== 'remove') {
        updatedShipmentBody.comments = req.body.comments;
    } else if (req.body.comments === 'remove') {
        updatedShipmentBody.comments = undefined;
    }

    try {
        const result = await Shipment.findByIdAndUpdate(req.params.id, { ...updatedShipmentBody });
        
        if (!result) {
            return res.status(400).send('Shipment Not Found.');
        }

        res.status(200).send('Updated Successfully.');
    } catch (error) {
        res.status(400).send(`Server Error: ${error}`);
    }
});

router.get('/', [auth], async (req, res) => {
    try {
        const shipments = await Shipment.find();

        if (!shipments) {
            res.status(400).send('No Shipments Found.');
        }

        res.status(200).send(shipments);
    } catch (error) {
        res.status(400).send(`Server Error: ${error}`);
    }
});

router.get('/:id', [auth], async (req, res) => {
    try {
        let shipment = await Shipment.findById(req.params.id);

        if (!shipment) {
            return res.status(400).send('Shipment Not Found.');
        }

        res.status(200).send(shipment); 
    } catch (error) {
        res.status(400).send(`Server Error: ${error}`);
    }
});

router.delete('/:id', [auth, shipper], async (req, res) => {
    try {
        const result = await Shipment.findByIdAndDelete(req.params.id);

        if (!result) {
            return res.status(400).send('Shipment Not Found.');
        }

        res.status(200).send('Deleted Successfully.');
    } catch (error) {
        res.status(400).send(`Server Error: ${error}`);
    }
});

module.exports = router;