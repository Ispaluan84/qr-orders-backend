const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true}
});

adminSchema.methods.matchPassword = function (password) {
    return bcrypt.compare(password, this.passwordHash);
};

adminSchema.pre('save', async function (next) {
    if(!this.isModified('passwordHash')) return next();
    const salt = await bcrypt.genSalt(10);
    this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
    next()
});



module.exports = mongoose.model('Admin', adminSchema);