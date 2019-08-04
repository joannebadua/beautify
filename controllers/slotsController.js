const moment = require("moment");

const db = require("../db/models");

// function getWorkingDays(month) {
//   const momentDay = moment(month, "YYYY-MM");
//   const days = momentDay.daysInMonth();
//   const workingDays = [];

//   for (let i = 0; i < days; i++) {
//     if (momentDay.day() >= 1 && momentDay.day() <= 5) {
//       workingDays.push(momentDay.format("YYYY-MM-DD"));
//     }
//     momentDay.add(1, "day");
//   }
//   return workingDays;
// }

const GRANULARITY = 30;

// function getAvailableTimes(day, service, provider, appointments) {
//   const momentDay = moment(day, "YYYY-MM-DD");
//   const duration = service.duration;
//   const startTime = momentDay.add(9, "hours");
//   const endTime = momentDay.add(21, "hours");

//   const slots = [];
//   let slotStart = startTime;
//   while () {
//     const slotEnd = slotStart.add(GRANULARITY, "minutes");
//     if (slotEnd > endTime) {
//         break;
//     }
//     slots.push(0);
//     slotStart = slotEnd;
//   }

//   const candidateAppointmentStart = startTime;
//   while (candidateAppointmentStart < endTime) {
//       const candidateAppointmentEnd = candidateAppointmentStart.add(duration, "minutes");
//       if (appointments.find(appointment => appointment.start_time <
//       if
//   }

// }

function getAvailableDates(slots, service, month) {
  debugger;
  const slotMap = {};
  slots.forEach(slot => {
    slotMap[
      moment(slot.date, "YYYY-MM-DD")
        .add(7, "hours")
        .format("YYYY-MM-DD")
    ] = slot;
  });

  const duration = service.duration;
  const momentDay = moment(month, "YYYY-MM");
  const days = momentDay.daysInMonth();
  const workingDays = [];

  for (let i = 0; i < days; i++) {
    workingDays.push(momentDay.format("YYYY-MM-DD"));
    momentDay.add(1, "day");
  }

  //return getWorkingDays(month).filter(day => {
  return workingDays.filter(day => {
    const slot = slotMap[day];
    return !slot || slot.max > duration;
  });
}

module.exports = {
  findByProviderServiceMonth: function(req, res) {
    debugger;
    const serviceId = req.query.serviceId;
    const month = req.params.month;
    const providerId = req.params.providerId;
    const startDate = moment(month, "YYYY-MM");
    const endDate = startDate.add(1, "month");

    Promise.all([
      db.service.findByPk(serviceId),
      db.slot.findAll()
      //     where: {
      //       providerId,
      //       $gte: startDate,
      //       $lte: endDate
      //     }
      //   })
    ])
      .then(results => {
        const service = results[0];
        const slots = results[1];

        const serviceRecord = service.dataValues;
        const slotRecords = slots.map(slot => slot.dataValues);
        const availableDates = getAvailableDates(
          slotRecords,
          serviceRecord,
          month
        );

        res.json(availableDates);
      })
      .catch(err => res.status(422).json(err));
  },

  findByProviderServiceDay: function(req, res) {
    const serviceId = req.query.serviceId;
    const day = req.params.day;
    const providerId = req.params.providerId;
    const startDate = moment(day, "YYYY-MM");
    const endDate = startDate.add(1, "day");

    Promise.all([
      db.service.findByPk(serviceId),
      db.provider.findByPk(providerId),
      db.appointments.findAll({
        //     where: {
        //       providerId,
        //       $gte: startDate,
        //       $lte: endDate
        //     }
        //   })
      })
    ])
      .then(results => {
        const service = results[0];
        const provider = results[1];
        const appointments = results[2];

        const availableTimes = getAvailableTimes(
          service,
          provider,
          appointments
        );
        res.json(availableTimes);
      })
      .catch(err => res.status(422).json(err));
  }
};
