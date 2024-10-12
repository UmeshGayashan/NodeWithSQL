const express = require('express');
const router = express.Router();
const { getCategoriesController,createCategoryController,updateCategoryController } = require('../controllers/categoryController');

router.get('/categories', getCategoriesController);
router.post('/categories', createCategoryController);
router.put('/categories/:id', updateCategoryController);

module.exports = router;