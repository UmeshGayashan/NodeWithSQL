const express = require('express');
const router = express.Router();
const { getCategoriesController } = require('../controllers/categoryController');

router.get('/categories', getCategoriesController);

module.exports = router;
