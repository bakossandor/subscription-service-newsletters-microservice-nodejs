const { Pool } = require('pg');
const pool = new Pool();

async function dbGetEveryNewsletter() {
  // later as db grows pagination is going to be implemented
  const queryString = 'SELECT * FROM newsletters';
  const { rows } = await pool.query(queryString);
  return rows;
}

async function dbPostNewsletter(user_id, name) {
  const queryString = 'INSERT INTO newsletters (user_id, name) VALUES ($1, $2)';
  await pool.query(queryString, [...arguments]);
}

module.exports = {
  dbGetEveryNewsletter,
  dbPostNewsletter
};
