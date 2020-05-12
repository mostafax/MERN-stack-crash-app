const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//routes
const employee = require('./routes/employee');
app.use('/employee', employee);
mongoose.connect('mongodb://localhost:27017/mren', {
    useNewUrlParser: true,
    useFindAndModify: false

}, (err) => {
    if (err) {
        process.exit(1);
        console.log('unable to connect database');
    } else {
        console.log("Succefly added to the db");
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("App is running");
});