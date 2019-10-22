const getEveryNewsletter = require('../controllers/get-every-newsletter');
const postNewsletter = require('../controllers/post-newsletter');
const { getUserNewsletters, getUserSpecificNewsletter } = require('../controllers/get-user-newsletter');
const deleteNewsletter = require('../controllers/delete-newsletter');

module.exports = (app) => {
  // get all newsletters for administrativ purposes 
  app.get('/newsletters-service', getEveryNewsletter);
  // post a new newsletter for the specified user
  app.post('/newsletters-service/:user_id/newsletters', postNewsletter);
  // get all of the newsletter for the specified user
  app.get('/newsletters-service/:user_id/newsletters', getUserNewsletters);
  // get the specific newsletter of the specific user
  app.get('/newsletters-service/:user_id/newsletters/:id', getUserSpecificNewsletter);
  // delete a specified user's newsletter
  app.delete('/newsletters-service/:user_id/newsletters/:id', deleteNewsletter);
};
