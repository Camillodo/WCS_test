// ENV (to set environment variables)
require('dotenv').config();

//MODULES
const express = require('express');
const router = require('./app/router');
const cors = require('cors');

// APP (express for the application and multer to get user input values from front)
const app = express ();

//PORT
const PORT = process.env.PORT || 6000;


// RESPONSETOJSON
app.use(express.json());

//* CORS (because front is not in public file)
app.use(cors({
    origin:'*',
}
   
));


//* ROUTE
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Good day for a swell battle! It's on port:${PORT}!`);
});