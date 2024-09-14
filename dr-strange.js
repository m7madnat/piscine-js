function addWeek(date) {
  const customDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];
  const daysSinceStart = Math.floor((date - new Date("0001-01-01")) / 86400000); //
  const cycleIndex = daysSinceStart % 14;

  return customDays[cycleIndex];
}

function timeTravel(date) {
  return new Date(date.date.setHours(date.hour, date.minute, date.second));
}
