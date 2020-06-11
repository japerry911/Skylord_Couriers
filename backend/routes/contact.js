const Joi = require('joi');
const nodeMailer = require('nodemailer');
const express = require('express');
const router = express.Router();

router.post('/send-email', (req, res) => {
    const { error } = validateEmail(req.body);

    if (error) {
        const errors = error.details.map(errorObject => errorObject.message);
        return res.status(400).send(`Error(s): ${errors.join(', ')}`);
    }

    const transporter = nodeMailer.createTransport({
        host: process.env.GMAIL_SERVICE_HOST,
        port: process.env.GMAIL_SERVICE_PORT,
        secure: process.env.GMAIL_SERVICE_SECURE,
        auth: {
            user: process.env.GMAIL_USER_NAME,
            pass: process.env.GMAIL_USER_PASSWORD
        }
    });

    const mailOptions = {
        to: process.env.GMAIL_USER_NAME,
        subject: req.body.subject,
        body: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        }

        console.log(`Message ${info.messageId} sent: ${info.response}`)
    });

    res.status(200);
});

function validateEmail(email) {
    const schema = {
        email: Joi.string().required().email(),
        subject: Joi.string().min(1).required(),
        message: Joi.string().min(1).required()
    };

    return Joi.validate(email, schema);
}

module.exports = router;