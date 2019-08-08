const db = require("../db/models");

// Defining methods for the Controller
module.exports = {
  create: function(req, res) {
    // const provider = req.body;
    // provider.img = "no image";
    // provider.workingHours = "no working hours";

    db.provider
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getProviderInfo: function (req, res) {
    db.provider
    .findAll({ 
      where: {id: req.params.id},
       include: [
          {
            model: db.service,
            required: false          
          }
        ]
             })
            .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  }
};
