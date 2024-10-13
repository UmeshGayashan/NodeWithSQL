const express = require('express');
const router = express.Router();
const { getCategoriesController,createCategoryController,updateCategoryController,deleteCategoryController } = require('../controllers/categoryController');

router.get('/categories', getCategoriesController);
router.post('/categories', createCategoryController);
router.put('/categories/:id', updateCategoryController);
router.delete('/categories/:id', deleteCategoryController);

module.exports = router;