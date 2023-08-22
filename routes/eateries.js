const express = require('express');
const router = express.Router();

// Import the eatery controller
const eateryController = require('../controllers/eateryController');

// Route for displaying the list of eateries 
router.get('/', eateryController.index);

// Route for displaying details of a specific eatery
router.get('/:id', eateryController.show);

module.exports = router;
