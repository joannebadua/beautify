const moment = require("moment");

function getWorkingDays(month) {
  const momentDay = moment(month, "YYYY/MM");
  const days = momentDay.daysInMonth();
  const workingDays = [];

  for (let i = 0; i < days; i++) {
    if (momentDay.day() >= 1 && momentDay.day() <= 5) {
      workingDays.push(momentDay.format("YYYY/MM/DD"));
    }
    momentDay.add(1, "day");
  }
  return workingDays;
}

console.log(getWorkingDays("2019/08"));
