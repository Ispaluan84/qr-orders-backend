const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: String,
    logoUrl: String,
    contactPhone: String,
    slug: { type: String, unique: true, required: true},
    tables: { type: Number, default: 5 },
    categories: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);