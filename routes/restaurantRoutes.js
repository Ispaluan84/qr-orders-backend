const express = require('express');
const router = express.Router();
const { getRestaurant } = require('../controllers/restaurantController');
const authMiddleware = require('../middlewares/authMiddleware');



router.get('/', authMiddleware , getRestaurant);

module.exports = router;
