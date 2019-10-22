const { dbDeleteNewsletters } = require('../db/db');

async function deleteNewsletter(request, response, next) {
  try {
    const { params: { user_id, id }} = request;
    await dbDeleteNewsletters(user_id, id);
    response.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = deleteNewsletter;
