const express = require('express');
const router = express.Router();
const subCategoryController = require('../controllers/subCategoryController');

router.post('/', subCategoryController.createSubCategory);
router.get('/', subCategoryController.getAllSubCategories);
router.get('/:id', subCategoryController.getSubCategory);
router.put('/:id', subCategoryController.editSubCategory);

module.exports = router;