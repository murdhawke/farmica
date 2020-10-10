//Declare required packages to run the server
const express = require("express")
const PORT = process.env.PORT || 4000;
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const config = require("./config/db")

//Run instance of the express server
const app = express()

//Configure a database and mongoose
mongoose.set("useCreateIndex", true)
mongoose
    .connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Farmica Database is up!")
    })
    .catch(err => {
        console.log({ database_error: err })
    })
//db configs end here

//Instantiate cors
app.use(cors())

//Instantiate and configure body-parser
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())
//body-parser configuration ends here

//Configure morgan
app.use(morgan("dev"))

//ROUTES

//Define first route
app.get("/", (req, res) => {
    console.log("Welcome home Farmica user!")
})

//Import our user routes
const userRoutes = require("./api/user/route/user");
app.use("/user", userRoutes)
app.listen(PORT, () => {
    console.log(`Farmica app is running on ${PORT}`)
})
