const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    username: {
        type: String,
        required: 'Username can\'t be empty',
    },
    email: {
        type: String,
        unique: [true, 'email already exists in database!'],
        lowercase: true,
        trim: true,
        required: 'Email can\'t be empty',
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: `{VALUE} is not a valid email!`
        }
    },
    role: {
        type: String,
        enum: ['normal', 'admin'],
        required: [true, "Please specify user role"]
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)