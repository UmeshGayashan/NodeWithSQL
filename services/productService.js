const { createProductInDB } = require('../repositories/productRepository');

const createProduct = async (name, description, price, currency, quantity, active, category_id) => {
    try {
        const newProduct = await createProductInDB(name, description, price, currency, quantity, active, category_id);
        return newProduct;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createProduct
};