const { dbGetEveryNewsletter } = require('../db/db');

async function getEveryNewsLetter(request, response, next) {
  try {
    const everyNewsletter = await dbGetEveryNewsletter();
    response.send({'data': everyNewsletter})
  } catch (error) {
    next(error);
  }
};

module.exports = getEveryNewsLetter;