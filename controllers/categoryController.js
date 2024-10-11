const {getCategories} = require('../services/categoryService');

const getCategoriesController = async (req, res) => {
    try {
        const categories = await getCategories();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCategoriesController,
}
