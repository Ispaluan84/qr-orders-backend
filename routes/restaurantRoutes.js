const express = require('express');
const router = express.Router();
const { createRestaurant, getRestaurants, getRestaurantBySlug} = require('../controllers/restaurantController');


router.post('/', createRestaurant);

router.get('/', getRestaurants)

router.get('/:slug', getRestaurantBySlug);




module.exports = router;