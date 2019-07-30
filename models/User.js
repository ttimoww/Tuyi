const mongoose = require('mongoose');
require('mongoose-type-email');

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: mongoose.SchemaTypes.Email,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    availability: []
})

let User = mongoose.model('User', userSchema)
module.exports = User;