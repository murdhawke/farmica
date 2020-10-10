//Define dependency packages
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require ("jsonwebtoken")

//Define the structure of the mongodb user
const userSchema = mongoose.Schema({
    name:  {
            type: String,
            required: [true, "Please enter your name"]
    }, 
    email:  {
            type: String,
            required: [true, "Please enter your email address"]
    },
    mobile: {
            type: Number,
            required: [true, "Please enter your mobile number starting with 7XXXXXXX"]
    },
    location: {
            type: String,
            required: [true, "Where are you located?"]
    },
    password: {
            type: String,
            required: [true, "Set a strong password"]
    },
    tokens: [
        {
            token:  String
        }
    ]
})

//METHODS

//Hashing passwords before saving the user model
userSchema.pre("save", async function(next) {
    const user = this
    if (user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

//Generating the auth token for the user
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email, location: user.location, mobile: user.mobile}, "secret")
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

//Method to check if user credentials match 
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await user.findOne({ email})
    if (!user) {
        throw new Error ({ error: "Invalid credentials provided!"})
    }
    const isPasswordMatch = await bcrypt.compare(password,user.password)
    if (!isPasswordMatch) {
        throw new Error ({ error: "Invalid credentials provided!"})
    }
    return user
}

const User = mongoose.model("User", userSchema)
module.exports = User