//Import user model 
const User = require("../model/User")

//User auth methods
exports.registerNewUser = async (req, res) => {
    try {
        let user = await User.find({ email: req.body.email})
        if (user.length>=1){
            return res.status(409).json({
                message: "The email is already in use!"
            })
        }
        user = new User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            location: req.body.location,
            password: req.body.password
        })
        let data = await user.save()
        const token = await user.generateAuthToken() //Calling the token generating method in the model
        res.status(201).json({ data, token})
    } catch (err) {
        res.status(400).json({err: err})
    }
}
exports.loginUser = async (req,res) => {}
exports.getUserDetails = async (req,res) => {}