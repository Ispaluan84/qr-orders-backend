const express = require('express');
const router = express.Router();

const {
    createOrder,
    getOrdersByRestaurant,
    updateOrderStatus
} = require('../controllers/orderController')

router.post('/', createOrder);

router.get('/:restaurantId', getOrdersByRestaurant);

router.put('/:orderId/status', updateOrderStatus);



module.exports = router;