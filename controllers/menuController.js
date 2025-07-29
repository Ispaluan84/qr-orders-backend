const MenuItem = require('../models/MenuItem');

exports.createMenuItem = async (req, res) => {
  try {
    const newItem = await MenuItem.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el plato' });
  }
};  

exports.getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el menú' });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el plato' });
  }
};


exports.toggleAvailability = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    item.available = !item.available;
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error al cambiar disponibilidad' });
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Plato eliminado' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el plato' });
  }
};
