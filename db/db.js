const { Pool } = require('pg');
const generateUriHash = require('../lib/generate-uri-hash');

const pool = new Pool();

async function dbGetEveryNewsletter() {
  // later as db grows pagination is going to be implemented
  const queryString = 'SELECT * FROM newsletters';
  const { rows } = await pool.query(queryString);
  return rows;
}

async function dbPostNewsletter(user_id, name) {
  const queryString = 'INSERT INTO newsletters (user_id, name, uri) VALUES ($1, $2, $3)';
  await pool.query(queryString, [...arguments, generateUriHash()]);
}

async function dbGetUserNewsletters(user_id) {
  const queryString = 'SELECT * FROM newsletters WHERE user_id = ($1)::uuid';
  const { rows } = await pool.query(queryString, [user_id]);
  return rows;
}

async function dbGetUserNewsletter(user_id, id) {
  const queryString = 'SELECT * FROM newsletters WHERE (user_id = ($1)::uuid AND id = ($2)::uuid)';
  const { rows } = await pool.query(queryString, [...arguments]);
  return rows;
}

async function dbDeleteNewsletters(user_id, id) {
  const queryString = 'DELETE FROM newsletters WHERE (user_id = ($1)::uuid AND id = ($2)::uuid)';
  await pool.query(queryString, [...arguments]);
  return;
}

module.exports = {
  dbGetEveryNewsletter,
  dbPostNewsletter,
  dbGetUserNewsletter,
  dbGetUserNewsletters,
  dbDeleteNewsletters,
};
