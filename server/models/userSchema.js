const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    phoneNumber: {
        type: String,
        required: true,
        min: 10,
        max:10,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max:255,
    },
    userType: {
        type: String,
        enum: ['Farmer', 'Service Provider'],
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('users', userSchema) //users here is the name of the collection which will be exported.