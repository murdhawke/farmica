require('dotenv')
const jwt = require('jsonwebtoken')


//middlewares to validate jwt token

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Access denied!!' }) 

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET )
        req.user = verified
        next() //allow continuing flow
    } catch (err) {
        res.status(400).json({ error: 'Token invalid!'})
    }
}

module.exports = verifyToken