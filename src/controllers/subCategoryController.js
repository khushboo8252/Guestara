const SubCategory = require('../models/subCategoryModel');

// Create Sub Category
exports.createSubCategory = async (req, res) => {
    try {
        const subCategory = new SubCategory(req.body);
        await subCategory.save();
        res.status(201).json(subCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get All Sub Categories
exports.getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Sub Category by ID or Name
exports.getSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id) || await SubCategory.findOne({ name: req.params.name });
        if (!subCategory) return res.status(404).json({ message: 'Sub Category not found' });
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Edit Sub Category
exports.editSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subCategory) return res.status(404).json({ message: 'Sub Category not found' });
        res.status(200).json(subCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};