const pool = require('../services/database');

// To check if a category exists in the database
const categoryExists = async (name) => {
    const existsResult = await pool.query({
        text: `SELECT EXISTS (SELECT * FROM category WHERE name = $1)`,
        values: [name]
    });
    return existsResult.rows[0].exists;
};

// To create a category in the database
const createCategoryInDB = async (name) => {
    const result = await pool.query({
        text: 'INSERT INTO category(name) VALUES($1) RETURNING *',
        values: [name]
    });
    return result.rows[0];
};

// To get all categories from the database
const getCategoriesInDB = async () => {
    const result = await pool.query('SELECT * FROM category'); // Await the DB query
    return result.rows;
};

// Update the category
const updateCategoryInDB = async (id, name) => {
    const result = await pool.query({
        text: `UPDATE category SET name = $1 , updated_date = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *`,
        values: [name, id]
    });
    return result.rows[0];
};

// Delete the category
const deleteCategoryInDB = async (id) => {
    const result = await pool.query({
        text: `DELETE FROM category WHERE id = $1 RETURNING *`,
        values: [id]
    });
    return result.rows[0];
};

// Check the count of products in a category
const countProductsInCategory = async (id) => {
    const result = await pool.query({
        text: `SELECT COUNT(*) FROM product WHERE category_id = $1`,
        values: [id]
    });
    return result.rows[0].count;
};

module.exports = {
    categoryExists,
    createCategoryInDB,
    getCategoriesInDB,
    updateCategoryInDB,
    deleteCategoryInDB,
    countProductsInCategory
};