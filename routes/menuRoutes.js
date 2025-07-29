const express = require('express')
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const {
    createMenuItem,
    getMenuItems,
    updateMenuItem,
    toggleAvailability,
    deleteMenuItem
} = require('../controllers/menuController');

router.get('/', getMenuItems );

router.post('/', protect, createMenuItem);

router.put('/:id', protect, updateMenuItem);

router.patch('/:id/toggle', protect, toggleAvailability);

router.delete('/:id', authenticate, deleteMenuItem)

module.exports = router;