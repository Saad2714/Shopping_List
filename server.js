const express = require('express');
const bodyParser = require('body-parser');
const concurrently = require('concurrently');
const mongoose = require('mongoose');
const items = require('./routes/api/items');

const app = express();

// Bodyparser middleware

app.use(bodyParser.json());

// DB config
const db = require('./config/uri.js').mongoURI;

// connect to mongo db

mongoose.connect(db)
    .then(()=> console.log("MongoDB Connected ..."))
    .catch(err =>console.log(err));

// Routes
app.use('/api/items',items)

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log( `Serveer started on ${port} successfully`));

