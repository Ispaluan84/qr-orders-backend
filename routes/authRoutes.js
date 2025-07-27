const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware')
const { register, login } = require('../controllers/authController');
const { createMenuItem } = require('../controllers/menuController');

router.post('/', protect, createMenuItem)
router.post('/register', register);
router.post('/login', login);

module.exports = router;
