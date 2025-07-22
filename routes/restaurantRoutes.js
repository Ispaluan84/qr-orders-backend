const express = require('express');
const router = express.Router();
const { createRestaurant, getRestaurants, getRestaurantBySlug, updateCategories} = require('../controllers/restaurantController');


router.post('/', createRestaurant);

router.get('/', getRestaurants)

router.get('/:slug', getRestaurantBySlug);

router.put('/:id/categories', updateCategories);




module.exports = router;