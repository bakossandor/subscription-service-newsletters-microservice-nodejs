const { dbPostNewsletter } = require('../db/db');

async function postNewsletter(request, response, next) {
  try {
    const { body: { name }} = request;
    const { params: { user_id }} = request;
    if (!name) {
      response.status(400).send({'developerMessage': 'name field is required'})
    }
    await dbPostNewsletter(user_id, name);
    response.status(201).end();
  } catch (error) {
    next(error);
  }
};

module.exports = postNewsletter;
