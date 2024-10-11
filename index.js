// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const database = require('./services/database');
const pool = require('./services/database');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => { 
    res.send('Hello World');
});

app.get('/categories', async(req, res) => { 
    try {
        const result = await pool.query('SELECT * FROM category');
        return res.status(200).json(result.rows); // Use result.rows to get the actual data
    } catch (error) {
        return res.status(500).json({ error: error.message }); // Return a more specific error message
    }
});

app.get('/products', async(req, res) => { 
    try {
        const result = await pool.query(`SELECT 
        p.id,p.name,p.description,p.price,p.currency,p.quantity,p.active,p.created_date,p.updated_date,
        (SELECT ROW_TO_JSON(category_obj)FROM(SELECT id,name FROM category WHERE id = p.category_id)category_obj) AS category
        FROM product p`);
        return res.status(200).json(result.rows);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});