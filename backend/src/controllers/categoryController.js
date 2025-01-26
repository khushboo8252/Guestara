const Category = require('../models/categoryModel');

// Create Category
exports.createCategory = async (req, res) => {
   try {
       const category = new Category(req.body);
       await category.save();
       res.status(201).json(category);
   } catch (error) {
       res.status(400).json({ message: error.message });
   }
};

// Get All Categories
exports.getAllCategories = async (req, res) => {
   try {
       const categories = await Category.find();
       res.status(200).json(categories);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
};

// Get Category by ID or Name
exports.getCategory = async (req, res) => {
   try {
       const category = await Category.findById(req.params.id) || await Category.findOne({ name: req.params.name });
       if (!category) return res.status(404).json({ message: 'Category not found' });
       res.status(200).json(category);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
};

// Edit Category
exports.editCategory = async (req, res) => {
   try {
       const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
       if (!category) return res.status(404).json({ message: 'Category not found' });
       res.status(200).json(category);
   } catch (error) {
       res.status(400).json({ message: error.message });
   }
};