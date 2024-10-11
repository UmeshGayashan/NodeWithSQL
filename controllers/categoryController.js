const {getCategories} = require('../services/categoryService');

const getCategoriesController = async (req, res) => { // This is async because it waits for the service to return the data
    try {
        const categories = await getCategories(); // Await the service function
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCategoriesController,
}
