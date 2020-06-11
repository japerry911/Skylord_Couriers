const { validateGood, Good } = require('../models/good');
const auth = require('../middleware/auth');
const shipper = require('../middleware/shipper');
const express = require('express');
const router = express.Router();

router.post('/', [auth, shipper], async (req, res) => {
    const { error } = validateGood(req.body);

    if (error) {
        const errors = error.details.map(errorObject => errorObject.message);
        return res.status(400).send(`Error(s): ${errors.join(', ')}`);
    }

    const good = new Good({
        name: req.body.name,
        weight: req.body.weight
    });

    try {
        const result = await good.save();
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(`Server error: ${error}`);
    }
});

module.exports = router;