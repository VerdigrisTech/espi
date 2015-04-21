/**
 * Implements Energy Services Provider Interface (ESPI) API callback routes.
 */

var authorize = function authorize(req, res, next) {
  
};

module.exports = function(server) {
  var espiRouter = server.loopback.Router();
  espiRouter('/auth', authorize);
  server.use('/espi', espiRouter);
};
