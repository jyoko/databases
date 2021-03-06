var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, rows) {
        res.header('Content-Type','application/json');
        res.end(JSON.stringify({results: rows}));
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, function(err, result){
        console.log("added message");
        res.end();
      });

    } // a function which handles posting a message to the database //TG res.send()
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

