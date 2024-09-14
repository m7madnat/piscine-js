function firstDayWeek(week, year) {
  let jan1 = new Date(year + "-01-01");
  let day1 = addWeek(jan1);
  let date = new Date(jan1);
  if (week != 1) {
    while (day1 != "Monday") {
      date.setDate(date.getDate() - 1);
      day1 = addWeek(date);
    }
    for (let i = 0; i < week - 1; i++) {
      date.setDate(date.getDate() + 7);
    }
  }
  let dat = date.toISOString();
  let dateonly = dat.slice(0, 10).split("-");
  let res = dateonly[2] + "-" + dateonly[1] + "-" + dateonly[0];
  return res;
}

function addWeek(date) {
  const customDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const daysSinceStart = Math.floor((date - new Date("0001-01-01")) / 86400000); //
  const cycleIndex = daysSinceStart % 7;
  return customDays[cycleIndex];
}

console.log(firstDayWeek(2, "2017"));
