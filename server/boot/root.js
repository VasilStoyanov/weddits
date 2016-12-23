module.exports = function(server) {
  var path = require("path");

  // Install a `/` route that returns server status
  var router = server.loopback.Router();

  router.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/index.html"));
  });

  server.use(router);
};
