(function() {
  'use strict';

  var path = require("path");

  module.exports = function() {
    return function customRaiseUrlNotFoundError(req, res, next) {

      res.sendFile(path.join(__dirname, "../../client/index.html"), function(err) {
        if (err) {
          console.error(err);
          res.status(err.status).end();
        }
      });

    };
  };
}());
