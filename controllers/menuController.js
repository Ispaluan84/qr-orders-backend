const MenuItem = require('../models/MenuItem');

exports.createMenuItem = async (req, res) => {
    try {
        const { name, description, price, category, restaurant, imageUrl } = req.body;
        
        const newItem = new MenuItem({
      name,
      description,
      price,
      category,
      restaurant,
      imageUrl
      });
      await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el plato' });
    }
};    

exports.getMenuItemsByRestaurant = async (req, res) => {
  try {
    console.log('rrestaurante ID recibido', req.params.restaurantId)
    const { restaurantId } = req.params;

    const items = await MenuItem.find({ restaurant: restaurantId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el menú' });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const item = await MenuItem.findByIdAndUpdate(id, updates, { new: true });

    if (!item) return res.status(404).json({ message: 'Plato no encontrado' });

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el plato' });
  }
};

exports.toggleAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await MenuItem.findById(id);
    if (!item) return res.status(404).json({ message: 'Plato no encontrado' });

    item.available = !item.available;
    await item.save();

    res.json({ message: 'Disponibilidad actualizada', available: item.available });
  } catch (error) {
    res.status(500).json({ message: 'Error al cambiar disponibilidad' });
  }
};