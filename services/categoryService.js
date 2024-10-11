const pool = require('./database');

const getCategories = async () => {
    try {
        const result = await pool.query('SELECT * FROM category');
        return result.rows;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getCategories,
};