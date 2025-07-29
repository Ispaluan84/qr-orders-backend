const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    tableNumber: { type: Number, required: true },
    items: [
        {
            menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
            quantity: { type: Number, required: true }
        }
    ],
    status: {
        type: String,
        enum: ['pendiente', 'preparando', 'listo', 'entregado'],
        default: 'pendiente'
    },
    totalPrice: { type: Number, required: true}
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);