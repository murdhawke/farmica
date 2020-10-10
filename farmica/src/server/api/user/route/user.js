//Define dependencies
const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")


//Create endpoints on the user route
//When hit, these endpoints will call the respective methods from userController
router.post("/register", userController.registerNewUser)
router.post("/login", userController.loginUser)
router.get("/profile", userController.getUserDetails)



module.exports = router