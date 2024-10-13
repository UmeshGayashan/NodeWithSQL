const { createProductInDB, updateProductInDBById, searchProductByExactName, searchProductByPartialName } = require('../repositories/productRepository');

const createProduct = async (name, description, price, currency, quantity, active, category_id) => {
    try {
        const newProduct = await createProductInDB(name, description, price, currency, quantity, active, category_id);
        return newProduct;
    } catch (error) {
        throw error;
    }
};

const updateProduct = async (id, name, description, price, currency, quantity, active, category_id) => {
    try {
        const updatedProduct = await updateProductInDBById(id, name, description, price, currency, quantity, active, category_id);
        return updatedProduct;
    } catch (error) {
        throw error;
    }
};

const searchProductByNameCaseSensitive = async (name, isExact = false) => {
    if(isExact){
        return await searchProductByExactName(name);
    }else{
        return await searchProductByPartialName(name);
    }
};

module.exports = {
    createProduct,
    updateProduct,
    searchProductByNameCaseSensitive
};