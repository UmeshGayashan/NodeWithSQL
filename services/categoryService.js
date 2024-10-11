const { text } = require('express');
const pool = require('./database');

const getCategories = async () => { // This is async because it waits for the DB query
    try {
        const result = await pool.query('SELECT * FROM category'); // Await the DB query
        return result.rows;
    } catch (error) {
        throw error;
    }
};


const createCategory = async (name) => {
    try {
        const existsResult = await pool.query({
            text: `SELECT EXISTS (SELECT * FROM category WHERE name = $1)`,
            values: [name]
        });

        if (existsResult.rows[0].exists) {
            throw new Error('Category already exists');
        }

        const result = await pool.query({
            text: 'INSERT INTO category(name) VALUES($1) RETURNING *',
            values: [name]
    });
        return result.rows[0]; // Return the newly created category
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCategories,
    createCategory
};