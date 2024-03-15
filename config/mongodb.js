const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_NAME = process.env.DB_NAME;
const MONGO_URI = process.env.MONGO_URI;

const url = `${MONGO_URI}/${MONGO_DB_NAME}`;

mongoose.connect(url, {})
    .then(result => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
