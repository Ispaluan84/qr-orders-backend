const express = require('express');
const router = express.Router();
const { createRestaurant, getRestaurantBySlug} = require('../controllers/restaurantController');


router.post('/', createRestaurant);

router.get('/:slug', getRestaurantBySlug);




module.exports = router;