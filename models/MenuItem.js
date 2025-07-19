const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
    category: { type: String, enum: ['entrante', 'principal', 'postre', 'bebida'], required: true },
    available: { type: Boolean, default: true },
    imageUrl: String,
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('MenuItem', menuItemSchema);