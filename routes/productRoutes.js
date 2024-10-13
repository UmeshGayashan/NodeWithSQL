const express = require('express');
const router = express.Router();

const { createProductController, updateProductController, searchProductController } = require('../controllers/productController')

router.post('/', createProductController);
router.put('/:id', updateProductController);

// Define the route for searching products
router.get('/search', searchProductController);

module.exports = router;