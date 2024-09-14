function isValid(date) {
  if (isNaN(date) || date == 0) {
    return false;
  }
  return true;
}

function isAfter(date1, date2) {
  if (date1 > date2) {
    return true;
  }
  return false;
}
function isBefore(date1, date2) {
  if (date2 > date1) {
    return true;
  }
  return false;
}
function isFuture(date) {
    if(!isValid(date)){
        return false
    }
    if (date > Date.now()){
        return true
    }
    return false
}
function isPast(date){
    if(!isValid(date)){
        return false
    }
    if (date < Date.now()){
        return true
    }
    return false
}
