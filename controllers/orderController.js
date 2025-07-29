const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');

exports.createOrder = async (req, res) => {
    try {
        const { tableNumber, items } = req.body;

        let totalPrice = 0

        for (const item of items) {
            const menuItem = await MenuItem.findById(item.menuItem);
            if (!menuItem || !menuItem.available) {
                return res.status(400).json({ message: `Producto no disponible: ${item.menuItem}`});   
            }
            totalPrice += menuItem.price * item.quantity;
        }

        const order = new Order({
            tableNumber,
            items,
            totalPrice
        });

        await order.save();
        res.status(201).json(order);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: `Error al crear el pedido`});
    }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('items.menuItem');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener pedidos' });
  }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const order = await Order.findById(orderId);
        if (!order) return res.status(404).json({ message: 'Pedido no encontado'});

        order.status = status;
        await order.save();

        res.json({ message: 'Estado actualizado', order });
    } catch (error) {
        res.status(500).json({ message: 'Error al cambiar estado del pedido'});
    }
};