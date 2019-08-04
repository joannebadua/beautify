const db = require("../db/models");

// Defining methods for the Controller
module.exports = {
  create: function(req, res) {
    const provider = req.body;
    provider.img = "no image";
    provider.workingHours = "no working hours";

    db.provider
      .create(provider)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
