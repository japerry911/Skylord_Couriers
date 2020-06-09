const Joi = require('joi');
const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/skylordCouriers', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true })
    .then(() => console.log('Successfully connected to MongoDB...'))
    .catch(error => console.error(`Failed to connect to MongoDB - ${error}`));

const port = process.env.port || 4000;

app.listen(port, () => console.log(`Listening on Port ${port}...`));