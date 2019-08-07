const moment = require("moment");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require("../db/models");
const INCREMENT = 60;

function parseProviderHours(providerHours) {
  debugger;
  const [ start, end ] = providerHours.split("-");
  return [
    start.split(":").map(num => parseInt(num)),
    end.split(":").map(num => parseInt(num))
  ];
}
function getProviderStartEnd(day, providerHours) {
  const momentDay = moment(day, "YYYY-MM-DD");
  const parsedProviderHours = parseProviderHours(providerHours);
  const providerStart = momentDay.clone().add(parsedProviderHours[0][0], 'hour').add(parsedProviderHours[0][1], 'minute');
  const providerEnd = momentDay.clone().add(parsedProviderHours[1][0], 'hour').add(parsedProviderHours[1][1], 'minute');
  return { providerStart: providerStart, providerEnd: providerEnd };
}
function getAvailabilities(day, appointments, providerHours, duration) {
  const startEnd = getProviderStartEnd(day, providerHours);
  const providerStart = startEnd.providerStart;
  const providerEnd = startEnd.providerEnd;

  let windowStart = providerStart;
  let windowEnd;
  let times = [];
  for (let i = 0; i < appointments.length; i++) {
    const appt = appointments[i];
    windowEnd = moment(appt.start_time).add(7, 'hours');
    times = times.concat(getTimesForWindow(windowStart, windowEnd, duration));
    windowStart = moment(appt.end_time).add(7, 'hours');
    console.log(windowStart.format());
  }
  windowEnd = providerEnd;
  console.log(windowEnd.format());
  times = times.concat(getTimesForWindow(windowStart, windowEnd, duration));
  return times;
}
function getTimesForWindow(windowStart, windowEnd, duration) {
  const times = [];
  const start = windowStart.clone();
  while (start.clone().add(duration, 'minute').isSameOrBefore(windowEnd)) {
    times.push(start.clone());
    start.add(INCREMENT, 'minute');
  }
  return times;
}
//console.log(getAvailabilities("2019-08-01", appointments, providerHours).map(h=>h.format()));
function getAvailableDates(slots, service, month) {
  debugger;
  const slotMap = {};
  slots.forEach(slot => {
    const slotDate =  moment(slot.date, "YYYY-MM-DD")
        .add(7, "hours")
        .format("YYYY-MM-DD");

    slotMap[slotDate] = slot;
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
    const serviceId = req.query.serviceId;
    const month = req.params.month;
    const providerId = req.params.providerId;
    const startDate = moment(month, "YYYY-MM");
    const endDate = startDate.clone().add(1, "month");
    Promise.all([
      db.service.findByPk(serviceId),
      db.slot.findAll({
          where: {
            providerId,
            date: {
            [Op.gte]: startDate.toDate(),
            [Op.lte]: endDate.toDate(),
            }
          }
        })
    ])
      .then(results => {
        const service = results[0];
        const slots = results[1];
        debugger;
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
    const startDate = moment(day, "YYYY-MM-DD");
    const endDate = startDate.clone().add(1, "day");
    Promise.all([
      db.service.findByPk(serviceId),
      db.provider.findByPk(providerId),
      db.appointment.findAll({
        where: {
          providerId,
          start_time: {
            [Op.gte]: startDate.toDate(),
            [Op.lte]: endDate.toDate(),
          }
        }
      })
    ])
      .then(results => {
        const service = results[0].dataValues;
        const provider = results[1].dataValues;
        const appointments = results[2].map(appt => appt.dataValues);
        console.log('x');
        console.log(appointments[0]);
        const availableTimes =  getAvailabilities(day, appointments, provider.workingHours, service.duration).map(h=>h.format());
        res.json(availableTimes);
      })
      .catch(err => res.status(422).json(err));
  }
};