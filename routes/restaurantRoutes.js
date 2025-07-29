const express = require('express');
const router = express.Router();
const { getRestaurant } = require('../controllers/restaurantController');




router.get('/', getRestaurant);

module.exports = router;
