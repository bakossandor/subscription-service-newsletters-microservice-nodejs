const getEveryNewsletter = require('../controllers/get-every-newsletter');
const postNewsletter = require('../controllers/post-newsletter');

module.exports = (app) => {
  // get all newsletters for administrativ purposes 
  app.get('/newsletters-service', getEveryNewsletter);
  // post a new newsletter for the specified user
  app.post('/newsletters-service/:user_id/newsletters', postNewsletter);
  // // get all of the newsletter for the specified user
  // app.get('/newsletters-service/:userId/newsletters');
  // // get the specific newsletter of the specific user
  // app.get('/newsletters-service/:userId/newsletters/:nlId');
  // // delete a specified user's newsletter
  // app.delete('/newsletters-service/:userId/newsletters/:nlId');
};
