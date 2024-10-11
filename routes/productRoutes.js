const express = require('express');
const router = express.Router();

const { createProductController } = require('../controllers/productController')

router.post('/products', createProductController);

module.exports = router;