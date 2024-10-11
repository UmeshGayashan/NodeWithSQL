const pool = require('./database');

const getCategories = async () => { // This is async because it waits for the DB query
    try {
        const result = await pool.query('SELECT * FROM category'); // Await the DB query
        return result.rows;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getCategories,
};