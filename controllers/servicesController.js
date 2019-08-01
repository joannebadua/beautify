const db = require("../db/models");

// Defining methods for the Controller

module.exports = {
  findAll: function(req, res) {
    debugger;
    db.service
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findServiceProviders: function(req, res) {
    debugger;
    db.provider
      .findAll({
        include: [
          {
            attributes: [],
            model: db.service,
            required: true,
            where: {
              id: req.params.id
            }
          }
        ],
        logging: console.log
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  // findById: function(req, res) {
  //   db.Service
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Service
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Service
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Service
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
