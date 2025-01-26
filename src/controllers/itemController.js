const Item = require('../models/itemModel');

// Create Item
exports.createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        item.totalAmount = item.baseAmount - item.discount;
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get All Items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Item by ID or Name
exports.getItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id) || await Item.findOne({ name: req.params.name });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Edit Item
exports.editItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res .status(200).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Search Item by Name
exports.searchItemByName = async (req, res) => {
    try {
        const items = await Item.find({ name: { $regex: req.params.name, $options: 'i' } });
        if (items.length === 0) return res.status(404).json({ message: 'No items found' });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};