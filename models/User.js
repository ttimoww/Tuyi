const mongoose = require('mongoose');
require('mongoose-type-email');

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

let User = mongoose.model('User', userSchema, 'users')
module.exports = User;