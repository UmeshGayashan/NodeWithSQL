const express = require('express');
const router = express.Router();
const { getCategoriesController,createCategoryController } = require('../controllers/categoryController');

router.get('/categories', getCategoriesController);
router.post('/categories', createCategoryController);

module.exports = router;