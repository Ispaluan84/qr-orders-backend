const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const restaurantRoutes = require('./routes/restaurantRoutes')
const menuRoutes = require('./routes/menuRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'https://qr-orders-frontend.onrender.com'
}));
app.use(express.json())

connectDB()
app.use('/api/restaurant', restaurantRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/menu', menuRoutes)
app.use('/api/orders', orderRoutes)
app.get('/', (req, res) => {
    res.send('QR Orders API funcionando');
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: http://localhost:${PORT} `)
})
