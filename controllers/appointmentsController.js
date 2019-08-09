const moment = require("moment");
const Sequelize = require("sequelize");
const db = require("../db/models");
const Op = Sequelize.Op;

// Defining methods for the Controller

function calculateMaxSlot(appts) {
  
}

function calculateMaxSlot(ps, pe, appts) {
    let max = 0;
    let start = moment(ps).unix();
    let end;

    appts = appts.concat({
        start_time: pe,
        end_time: pe
    });

    for (let i = 0; i < appts.length; i++) {
        const appt = appts[i];        
        end = moment(appt.start_time).unix();  
        max = Math.max(max, (end - start) / 60);
        start = moment(appt.end_time).unix();
    }

    return max;
}

module.exports = {
  create: function(req, res) {
    console.log(req.body);
    const appt = req.body;

    const { start_time, end_time, providerId } = appt;

    // Promise.all([db.provider.findByPk(providerId),
    // db.appointment.findAll({
    //   where: { providerId: req.params.id },
    //   start_time: {
    //     [Op.gte]: moment(start_time).toDate(),
    //     [Op.lte]: moment(end_time).toDate(),
    //   }
    // })
    // ])
    // .then(results => {
    //   const [provider, appts] = results;
    //   appts.push(appt);
    //   const maxSlot = calculateMaxSlot(provider, appts);
    // });

    const date = start_time;
    const dayStart = moment(start_time);

    dayStart.add(dayStart.hours() * -1, "hour");
    const dayStartStr = dayStart.toDate();
    const dayEnd = dayStart.clone().add(24, "hours");
    const dayEndStr = dayEnd.toDate();

    debugger;
    Promise.all([
      db.appointment.findAll({
        where: {
              providerId,
              start_time: {
                [Op.gte]: dayStartStr,
                [Op.lte]: dayEndStr
              }             
            },
              order: [
            ['start_time', 'ASC']
         ]
      }),
      db.provider.findByPk(providerId),
    ]).then(results => {
      const [appts, provider] = results;
      const [start_time, end_time ] = provider.dataValues.workingHours.split("-");

      const date = dayStart.format("YYYY-MM-DD");
      const providerStart =  date + " " + start_time;
      const providerEnd = date + " " + end_time;

      const max = calculateMaxSlot(providerStart, providerEnd, appts.map(appt => appt.dataValues).concat(appt));

      return db.slot.upsert({
        providerId,
        date: dayStartStr,
        max
      });
    })
    .then(() => {
      db.appointment
        .create(appt)
        .then(dbModel => {
          console.log(dbModel);
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    });
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
