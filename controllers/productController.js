const { categoryExistsById, prodcutExistsById } = require('../repositories/productRepository');
const { updateProduct, createProduct } = require('../services/productService');
const { categoryExists } = require('../repositories/categoryRepository')

const createProductController = async (req,res) =>{
    const {name, description, price, currency, quantity, active, category_id} = req.body;
    
    if(!name){
        return res.status(422).json({ error: 'Name is required' });
    }
    if(!price){
        return res.status(422).json({ error: 'Price is required' });
    }
    if(!category_id){
        return res.status(422).json({ error: 'Category ID is required' });
    }else{
        const categoryExists = await categoryExistsById(category_id);
        if(!categoryExists){
            return res.status(422).json({ error: 'Category does not exist' });
        }
    }

    try{
        const newProduct = await createProduct(name, description, price, currency, quantity, active, category_id);
        return res.status(201).json(newProduct);
    }catch{
        return res.status(500).json({ error:error.message });
    }
}

const updateProductController = async (req,res) =>{
    const { id } = req.params;
    const {name, description, price, currency, quantity, active, category_id} = req.body;
    const productExists = await prodcutExistsById(id);
    if(!productExists){
        return res.status(422).json({ error: 'Product does not exist' });
    }
    if(!name){
        return res.status(422).json({ error: 'Name is required' });
    }
    if(!price){
        return res.status(422).json({ error: 'Price is required' });
    }
    if(!category_id){
        return res.status(422).json({ error: 'Category ID is required' });
    }else{
        const categoryExists = await categoryExistsById(category_id);
        if(!categoryExists){
            return res.status(422).json({ error: 'Category does not exist' });
        }
    }

    try{
        const updatedProduct = await updateProduct(id, name, description, price, currency, quantity, active, category_id);
        return res.status(200).json(updatedProduct);
    }catch{
        return res.status(500).json({ error:error.message });
    }
};

module.exports = {
    createProductController,
    updateProductController
};