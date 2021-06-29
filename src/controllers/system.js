const express = require('express');
const router = express.Router();

router.get ( '/ping', async ( req, res ) => {
    res.send ( {
        message: "System is alive",
        dateTime: (new Date()).toISOString()
    })
})

module.exports = router;