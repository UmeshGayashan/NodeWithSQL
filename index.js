const express = require('express');
const database = require('./services/database');
const pool = require('./services/database');
const app = express();

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

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});