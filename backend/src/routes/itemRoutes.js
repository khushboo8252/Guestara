const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', itemController.createItem);
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItem);
router.put('/:id', itemController.editItem);
router.get('/search/:name', itemController.searchItemByName);

module.exports = router;