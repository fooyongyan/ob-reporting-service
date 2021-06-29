const express = require('express');
const router = express.Router();


router.post (`generate-daily-report`, async (req, res) => {
    console.log ( 'Generating Report... ');
    // TODO : Generate a List of Report for Submission 
    // 1. Start Date 
    res.send ( {
        message: "Report Generated",
    })
})

module.exports = router;