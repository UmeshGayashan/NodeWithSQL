// Load environment variables from .env file
require('dotenv').config();

const { Pool } = require('pg');

// Create a new pool instance with connection parameters
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

// Export the pool object for use in other files
module.exports = pool;
