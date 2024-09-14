function matchCron(pat, date) {
  let [spmin, sphour, spday_ofm, spmon, spday_week] = pat.split(" ");
  let min = date.getUTCMinutes();
  let hour = date.getUTCHours();
  let day_month = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let day_week = ((date.getUTCDay() + 6) % 7) + 1;

  return (
    helper(spmin, min) &&
    helper(sphour, hour) &&
    helper(spday_week, day_week) &&
    helper(spday_ofm, day_month) &&
    helper(spmon, month)
  );
}
function helper(pat, val) {
  return pat === "*" || parseInt(pat, 10) === val;
}
 console.log(matchCron('* * * 6 *', new Date('2020-05-30 06:09:00'))) // -> true);/
