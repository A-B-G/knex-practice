//initialize dotenv
require('dotenv').config();
const express = require('express');
//add logging library
const morgan = require('morgan');
//add basic middleware
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const app = express();
//set morgan to be less verbose in production
const morganOptions = (NODE_ENV === "production") 
    ? 'tiny'
    : 'common';

app.use(morgan(morganOptions));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Hello, boilerplate!');
})
//set up error messages based on environment
app.use(function errorHandler(error, req, res, next) {
    let response;
    if(NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
        } else {
            console.log(error);
            response = { message: error.message, error }
        }
        res.status(500).json(response);
    });

module.exports = app;
