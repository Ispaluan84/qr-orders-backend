const express = require('express');
const router = express.Router();

router.get('/test', (requ, set) => {
    res.send('Pedido recibido');
});

module.exports = router;