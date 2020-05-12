const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeShchema = new Schema({
    fristName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model("Employee", EmployeeShchema);