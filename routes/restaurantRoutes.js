const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware')
const { createRestaurant, getRestaurants, getRestaurantBySlug, updateCategories} = require('../controllers/restaurantController');


router.post('/', protect, createRestaurant);

router.get('/', getRestaurants)

router.get('/:slug', getRestaurantBySlug);

router.put('/:id/categories', updateCategories);




module.exports = router;