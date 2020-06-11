const cors = require('cors');
const users = require('./routes/users');
const auth = require('./routes/auth');
const contact = require('./routes/contact');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ exposedHeaders: ['x-auth-token'] }));
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/contact', contact);

mongoose.connect('mongodb://localhost/skylordCouriers', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true })
    .then(() => console.log('Successfully connected to MongoDB...'))
    .catch(error => console.error(`Failed to connect to MongoDB - ${error}`));

const port = process.env.port || 4000;

app.listen(port, () => console.log(`Listening on Port ${port}...`));