const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    passwordHash: { type: String, required: true},
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true}
});

adminSchema.methods.matchPassword = function (password) {
    return bcrypt.compare(password, this.passwordHash);
};





module.exports = mongoose.model('Admin', adminSchema);