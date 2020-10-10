module.exports = {
    database: "mongodb://localhost:27017/farmica_db",
    secret: "password"
}

//This is the URI mongoose will use to connect to the db.  Default port for mongo is always 27017
//farmica_db is the name of the project database
//This is exported to the express server in index.js under config.database