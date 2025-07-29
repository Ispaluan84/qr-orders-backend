const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');

const {
    createOrder,
    getAllOrders,
    updateOrderStatus
} = require('../controllers/orderController')

router.post('/', createOrder);

router.get('/', protect, getAllOrders);

router.put('/:orderId/status', protect, updateOrderStatus);



module.exports = router;