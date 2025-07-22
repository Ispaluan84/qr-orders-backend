const Restaurant = require('../models/Restaurant');
const slugify = require('slugify');

exports.createRestaurant = async (req, res) => {
    try {
        const { name, description, contactPhone, tables } = req.body;
        const slug = slugify(name, {lower: true});

        const existing = await Restaurant.findOne({ slug })
        if (existing) {
            return res.status(400).json({ message: 'Ya existe u restaurante con ese nombre'})
        }

        const restaurant = new Restaurant({
            name,
            description,
            contactPhone,
            tables,
            slug
        });

        await restaurant.save();
        res.status(201).json(restaurant)
    } catch (error) {
        res.status(500).json({ message: 'Error al crear restaurante' });
    }
};

exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener restaurantes' })
    }
};

exports.getRestaurantBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const restaurant = await Restaurant.findOne({ slug });
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurante no encontrado' });
        }
        res.json(restaurant)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener restaurante'});
    }
};

exports.updateCategories = async (req, res) => {
    try {
        const { id } = req.params;
        const { categories } = req.body;

        const restaurant = await Restaurant.findByIdAndUpdate(
            id,
            { categories},
            { new: true }   
        );

        res.json(restaurant);
    } catch (err) {
        res.status(500).json({ message: 'Error al actializar categorias' });
    }
};