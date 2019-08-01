const db = require("../db/models");

// Defining methods for the Controller

module.exports = {
  create: function(req, res) {
    db.appointment
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }
};
