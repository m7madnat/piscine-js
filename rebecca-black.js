function getDayOfWeek(date) {
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
  
    return cycleIndex;
  }
  
  function isFriday(date) {
    if (getDayOfWeek(date) == 4) {
      return true;
    }
    return false;
  }
  
  function isWeekend(date) {
    if (getDayOfWeek(date) >= 5) {
      return true;
    }
    return false;
  }
  
  function isLeapYear(date) {
    let sp = iso(date)
    let y = parseInt(sp[0]);
    if (y % 4 == 0) {
      return true;
    }
    return false;
  }
  function iso(date){
          let a = date.toISOString().slice(0,10).split('-')
          return a
  }
  function isLastDayOfMonth(date) {
    let sp = iso(date)
    let m = parseInt(sp[1]);
    let d = parseInt(sp[2]);
    let ld = 0
  
    
      if (m == '01') ld = 31;
  
      if (m == '02'){
          if (isLeapYear(date)){
              ld = 29;
          } else{
              ld = 28;
          }
      } 
  
      if (m == '03') ld = 31;
      if (m == '04') ld = 30;
      if (m == '05') ld = 31;
      if (m == '06') ld = 30;
      if (m == '07') ld = 31;
      if (m == '08') ld = 31;
      if (m == '09') ld = 30;
      if (m == '10') ld = 31;
      if (m == '11') ld = 30;
      if (m == '12') ld = 31;
  
      if (d == ld){
          return true
      }
      return false
    }
  
  
  // console.log(isFriday(new Date("1992-01-26")));
  // console.log(!isWeekend(new Date("1929-02-13")));
  // console.log(isLeapYear(new Date("2001-02-01")));
  // console.log(isLastDayOfMonth(new Date("2001-02-28")));
  // // console.log(iso(new Date("2001-02-01")));