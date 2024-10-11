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
            return res.status(422).json({ error: 'Name is required' }); // 422 for missing parameters(422 Unprocessable Entity)
        }
        try {
            const newCategory = await createCategory(name);  // Try to create the category
            return res.status(201).json(newCategory); // 201 for successful creation
        } catch (error) {
            // If the error is due to the category already existing, return a 409 Conflict status
            if (error.message === 'Category already exists') {
                return res.status(409).json({ error: error.message }); // 409 for conflict
            }
            throw error; // For any other errors, throw to be handled in the outer catch block
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCategoriesController,
    createCategoryController
};