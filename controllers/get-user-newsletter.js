const { dbGetUserNewsletter, dbGetUserNewsletters } = require('../db/db');

async function getUserNewsletters(request, response, next) {
  try {
    const { params: { user_id }} = request;
    const newsletters = await dbGetUserNewsletters(user_id);
    response.send({'data': newsletters})
  } catch (error) {
    next(error);
  }
};

async function getUserSpecificNewsletter(request, response, next) {
  try {
    const { params: { user_id, id }} = request;
    const newsletter = await dbGetUserNewsletter(user_id, id);
    response.send({'data': newsletter})
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserNewsletters,
  getUserSpecificNewsletter,
};
