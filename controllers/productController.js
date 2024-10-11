const { createProduct } = require('../services/productService')

const createProductController = async (req,res) =>{
    const {name, description, price, currency, quantity, active, category_id} = req.body;
    try{
        const newProduct = await createProduct(name, description, price, currency, quantity, active, category_id);
        return res.status(201).json(newProduct);
    }catch{
        return res.status(500).json({ error:error.message });
    }
}

module.exports = {
    createProductController
};