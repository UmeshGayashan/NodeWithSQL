const {getCategories,createCategory} = require('../services/categoryService');

const getCategoriesController = async (req, res) => { // This is async because it waits for the service to return the data
    try {
        const categories = await getCategories(); // Await the service function
        return res.status(200).json(categories);  // 200 for successful request
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createCategoryController = async (req, res) => {
    const { name } = req.body;
    try {
        if (!name) {
            return res.status(400).json({ error: 'Name is required' }); // 400 for bad request
        }
        const newCategory = await createCategory(name);
        return res.status(201).json(newCategory); // 201 for successful creation
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCategoriesController,
    createCategoryController
}
