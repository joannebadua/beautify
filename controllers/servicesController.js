const db = require("../db/models");

// Defining methods for the Controller

module.exports = {
  findByProvider: function(req, res) {
    db.service
      .findAll({     
        include: [
          {
            model: db.provider,
            required: true,
             where: {
              id: req.params.id
            },   
               
          }]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

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

 findAllByCategory: function(req, res) {
   db.service
      .findAll({
        where: {
          category: req.params.category
        },
         include: [
          {
            model: db.provider,
            required: true          
          }
        ]
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
  },

    create: function(req, res) {
      let service;
      db.service
      .create(req.body)
      .then(dbModel => {
        service = dbModel;
        const serviceId = dbModel.id;
        return db.provider_service.create({
          serviceId,
          providerId: req.body.providerId
        });     
      })
      .then(()=> res.json(service))
      .catch(err => res.status(422).json(err));
  }
};
