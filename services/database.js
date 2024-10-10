const { Pool } = require('pg');

// Create a new pool instance with connection parameters
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: "password",
  port: 5432,
});

// Export the pool object for use in other files
module.exports = pool;
