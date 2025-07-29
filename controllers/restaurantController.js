const Restaurant = require('../models/Restaurant');
const Admin = require('../models/Admin');

exports.getRestaurant = async (req, res) => {
  try {
    const admin = await Admin.findById(req.user.id).populate('restaurant');
    if (!admin || !admin.restaurant) {
      return res.status(404).json({ message: 'Restaurante no encontrado' });
    }
    res.json(admin.restaurant);
  } catch (err) {
    console.error('Error al obtener restaurante:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
