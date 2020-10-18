//Protected route 

const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        error: null,
        data: {
            title: 'Farmica Dashboard',
            content: 'This is the main Farmica dashboard to see all the services',
            user: req.user, //token payload information
        },
    })
})

module.exports = router