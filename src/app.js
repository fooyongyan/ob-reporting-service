console.log("Initializing Application Service");

const port = 1000;
const express = require('express');
const app = express();

// middleware that is specific to this router
app.use(function timeLog (req, res, next) {
    console.log(`${(new Date()).toISOString()} ${req.originalUrl} called`);
    console.log(`Parameters: `,req.params);
    next()
  })
  
app.use ( '/api/system', require('./controllers/system'));
app.use ( '/api/report', require('./controllers/report'));

app.listen ( port, () => {
    console.log ( "Service Started");
    console.log (`Listening to port ${port}`);
})



