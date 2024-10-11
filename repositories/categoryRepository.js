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

module.exports = {
    categoryExists,
    createCategoryInDB,
    getCategoriesInDB
};