const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');

const {
    createOrder,
    getOrdersByRestaurant,
    updateOrderStatus
} = require('../controllers/orderController')

router.post('/', createOrder);

router.get('/:restaurantId', protect, getOrdersByRestaurant);

router.put('/:orderId/status', protect, updateOrderStatus);



module.exports = router;