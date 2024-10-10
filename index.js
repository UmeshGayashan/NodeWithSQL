const express = require('express');
const database = require('./services/database');
const pool = require('./services/database');
const app = express();

app.get('/', (req, res) => { 
    res.send('Hello World');
});

app.get('/categories', (req, res) => { 
    pool.query('SELECT * FROM categories',).then((result) => {
        return res.status(200).json(result.rows)
    }).catch((error) => {
        return res.status(500).json({error: error.message})
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});