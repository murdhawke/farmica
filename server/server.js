require('dotenv')
const express = require('express')
const PORT = process.env.PORT || 4040 //Declaring the port on which the server will run on
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose  = require('mongoose')

//Importing other files required by the server

//database environment variable config
const config = require('./config/db')


//Instatitate the server + database
const app = express()


//Connect to db
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connected to farmica database'));


//Import routes from routes/
const authRoutes  = require('./routes/auth')
const dashRoutes  = require('./routes/dashboard')
const verifyToken = require('./routes/token-validation')


//Middlewares (Functions that execute when a route is hit).

//middlewares
app.use(express.json()) //for the body parser

//route middlewares
app.use('/', authRoutes) // Routes that authenticate the user
app.use('/dashboard', verifyToken, dashRoutes)
//Listening to the server

app.listen(PORT)