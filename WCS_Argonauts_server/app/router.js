//IMPORTS
const express = require('express');
const mainController = require('./controllers/main');
const argonautController = require('./controllers/argonaut')
const sanitizer = require('./sanitize/sanitizer')
const router = express.Router();

// MAIN ROUTE
router.get('/', mainController.home);
//We use sanitizer for each route
router.use(sanitizer);

//USER ROUTE (1 for reading all argonauts, another to add one argonaut thanks to matching controllers and methods)
router.get('/argonaut', argonautController.getallArgonauts);
router.post('/argonaut', argonautController.addArgonauts);


//EXPORTS
module.exports = router;
