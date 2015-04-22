/**
 * Implements Energy Services Provider Interface (ESPI) API callback routes.
 */

var scopeSelection = function scopeSelection(req, res, next) {
  var dcConfig = require('../datacustodian.json');
  var env = req.app.get('env');

  console.log(req);
  res.send("We should authenticate to " + dcConfig[req.params.datacustodian].authorizationServerAuthorizationEndpoint[env]);
};

module.exports = function(server) {
  // Get an instance of Express Router
  var espiRouter = server.loopback.Router();

  espiRouter.get('/scope/:datacustodian', scopeSelection);

  server.use('/espi', espiRouter);
};
