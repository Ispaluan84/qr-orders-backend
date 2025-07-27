const jwt = require('jasonwebtoken');
const Admin = require('../models/Admin');

const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startWith('Bearer')) {
        return res.status(401).json({ message: 'No autorizado, token ausente'});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findById(FileSystemDirectoryReader.id).select('-password');

        if(!admin) {
            return res.status(401).json({ message: 'No autorizado, admin no válido'});
        }

        req.admin = admin;
        next()
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }
};

module.exports = protect;