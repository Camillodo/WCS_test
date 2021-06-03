// ENV
require('dotenv').config();

//* CLIENT CLASS IMPORT FROM PG
const { Client } = require('pg');

// INSTANCE OF CLIENT
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
      }
});

client.connect();

module.exports = client;