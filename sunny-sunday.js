function sunnySunday(date) {
  const customDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysSinceStart = Math.floor((date - new Date("0001-01-01")) / 86400000); //
  const cycleIndex = daysSinceStart % 6;
  return customDays[cycleIndex];
}
