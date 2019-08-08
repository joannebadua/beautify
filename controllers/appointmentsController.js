const db = require("../db/models");

// Defining methods for the Controller

module.exports = {
  create: function(req, res) {
    const appt = req.body;

    db.appointment
      .create(appt)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  findAllByProvider: function(req, res) {
    db.appointment
      .findAll({
        where: { providerId: req.params.id }
      })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }

  // findAll: function(req, res) {
  //   db.appointment
  //     .find({
  //       where: { userId: req.params.id }
  //     })
  //     .then(dbModel => {
  //       console.log(dbModel);
  //       res.json(dbModel);
  //     })
  //     .catch(err => res.status(422).json(err));
  // }
};
