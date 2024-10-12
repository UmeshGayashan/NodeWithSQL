const pool = require('../services/database');

const createProductInDB = async (name, decription, price, currency, quantity, active, category_id) => {
    const result = await pool.query({
        text: `INSERT INTO product(name, description, price, currency, quantity, active, category_id) 
            VALUES($1, $2, $3, $4, $5, $6, $7) 
            RETURNING *`,
        values: [name, 
            decription ? decription : null, 
            price, 
            currency ? currency : 'LKR', 
            quantity ? quantity : 0, 
            active ? active : true, 
            category_id]
    });
    return result.rows[0];
};

const updateProductInDBById = async (id, name, description, price, currency, quantity, active, category_id) => {
    const result = await pool.query({
        text: `UPDATE product SET name = $1, description = $2, price = $3, currency = $4, quantity = $5, active = $6, category_id = $7, updated_date = CURRENT_TIMESTAMP WHERE id = $8 RETURNING *`,
        values: [name, 
            description ? description : null, 
            price, 
            currency ? currency : 'LKR', 
            quantity ? quantity : 0, 
            active ? active : true, 
            category_id, 
            id]
    });
    return result.rows[0];
};

const prodcutExistsById = async (id) => {
    const existsResult = await pool.query({
        text: `SELECT EXISTS (SELECT * FROM product WHERE id = $1)`,
        values: [id]
    });
    return existsResult.rows[0].exists;
};

const categoryExistsById = async (id) => {
    const existsResult = await pool.query({
        text: `SELECT EXISTS (SELECT * FROM category WHERE id = $1)`,
        values: [id]
    });
    return existsResult.rows[0].exists;
};

module.exports = {
    createProductInDB,
    categoryExistsById,
    updateProductInDBById,
    prodcutExistsById
};