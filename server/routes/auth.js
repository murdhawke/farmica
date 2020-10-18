//These routes are ones to authenticate users before accessing the rest of the pages
//Should have register and login routes
const dotenv = require('dotenv').config()
const router = require('express').Router()
const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userSchema') //Import the user schema from models


//REGISTER ROUTE

router.post('/register', async (req, res) => {
    const isEmailExist = await User.findOne({ email: req.body.email }) //Checks to see if the email already exists.

    if (isEmailExist)
    return res.status(400).json({ error: 'The email privided is already registered!' })
    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)
    const user = new User ({ //define user object with data from the request body.
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password, // Will be a hashed password
        userType: req.body.userType,
        location: req.body.location, //Capture input and assign them to them respective fields in the schema
    })
    try {
        const savedUser = await user.save()
        res.json({ error: null, data: savedUser }) //Using in-built mongoose functions to save the registered user
    }
    catch (error)  { 
        res.status(400).json({ error })  //error checking.  If any errrors,  show them with a 400 error code.
    }
})

//LOGIN ROUTE

router.post('/login', async (req, res) => {
    
    //Check if the email provided is correct
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).json({ error: "The email provided is invalid!" })
    //Check if the password provided is correct
    const checkPassword = await bcrypt.compare(req.body.password, user.password) //compare the provided password to the one on the users collection
    if(!checkPassword) return res.status(400).json({ error: "Invalid password" })

    //Create a JWT token to ensure integrity of the details sent back like passwords
    const token = jwt.sign(
        //payload data -sent data
        {
            name: user.name,
            id: user._id,
        },
        process.env.TOKEN_SECRET
       )
    res.header('auth-token', token).json({
        error: null,
        data: {
            token,
        }
    })
})


module.exports = router