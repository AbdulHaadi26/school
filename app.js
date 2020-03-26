//To get process env variables
require('dotenv').config();

//Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var path = require('path');

//MongoDB Connection String
const mongoURI = `mongodb+srv://${process.env.NAME}:${process.env.PASS}@dev-02rqv.mongodb.net/Kashif?retryWrites=true&w=majority`;
//Middleware functions
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/public', express.static('public'));

//Routes
require('./routes')(app);

//Send an HTML page to confirm that the website is working
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//Send an HTML page to confirm that the website is working
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//Connect to Mongodb
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
    if (err)
        console.log(err)
    else
        console.log('Connected to MongoDB');
});

//Start the server on port
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port '+process.env.Port);
});

