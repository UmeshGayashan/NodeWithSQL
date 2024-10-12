const express = require('express');
const router = express.Router();

const { createProductController, updateProductController } = require('../controllers/productController')

router.post('/products', createProductController);
router.put('/products/:id', updateProductController);

module.exports = router;