const Admin = require('../models/Admin');

exports.getRestaurant = async (req, res) => {
  try {
    const restaurant = {
      name: "Mi Restaurante",
      description: "Servicio digital de menú y pedidos"
    };

    res.json(restaurant);
  } catch (err) {
    console.error("Error al obtener restaurante:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
