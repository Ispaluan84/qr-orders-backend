const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '2d' });
};

exports.register = async (req, res) => {

    const { email, password } = req.body;
  try {
    const exists = await Admin.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Ya existe una cuenta con ese email' });
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({ 
      email, 
      passwordHash: hashedPassword,  
    });
    res.status(201).json({
      token: generateToken(admin._id),
      admin: { email: admin.email },
    });
  } catch (err) {
    console.error('Error en el registro:', err);
    res.status(500).json({ message: 'Error en el registro' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({ message: 'Credenciales incorrectas' });
    }

    res.json({
      token: generateToken(admin._id),
      admin: { email: admin.email }
    });
  } catch (err) {
    res.status(500).json({ message: 'Error en el login' });
  }
};