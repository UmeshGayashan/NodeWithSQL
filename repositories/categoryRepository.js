const pool = require('../services/database');

const categoryExists = async (name) => {
    const existsResult = await pool.query({
        text: `SELECT EXISTS (SELECT * FROM category WHERE name = $1)`,
        values: [name]
    });
    return existsResult.rows[0].exists;
};

module.exports = {
    categoryExists
};