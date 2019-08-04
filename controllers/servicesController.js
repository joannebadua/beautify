const db = require("../db/models");

// Defining methods for the Controller

module.exports = {
  findAll: function(req, res) {
    db.service
      .findAll({
        where: {
          category: req.params.category
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findServiceProviders: function(req, res) {
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
        ]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
