const express = require('express')
const router = express.Router();

const {
    createMenuItem,
    getMenuItemsByRestaurant,
    updateMenuItem,
    toggleAvailability
} = require('../controllers/menuController');

router.post('/', createMenuItem);

router.get('/:restaurantId', getMenuItemsByRestaurant );

router.put('/:id', updateMenuItem);

router.patch('/:id/toggle', toggleAvailability);

module.exports = router;