const express = require('express');
const router = express.Router();
const { getRestaurant } = require('../controllers/restaurantController');
const protect = require ('../middlewares/authMiddleware');



router.get('/', getRestaurant);

module.exports = router;
