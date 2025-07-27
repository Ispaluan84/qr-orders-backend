const express = require('express')
const router = express.Router();
const protect = require('../controllers/menuController');
const { createMenuItem } = require('../controllers/menuController'); 

const {
    createMenuItem,
    getMenuItemsByRestaurant,
    updateMenuItem,
    toggleAvailability
} = require('../controllers/menuController');

router.post('/', protect, createMenuItem);

router.get('/restaurant/:restaurantId', getMenuItemsByRestaurant );

router.put('/:id', protect, updateMenuItem);

router.patch('/:id/toggle', protect, toggleAvailability);

module.exports = router;