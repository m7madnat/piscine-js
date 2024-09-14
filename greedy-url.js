const reg1 =
  /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g;
const reg2 =
  /\?([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*&){2,255}([-a-zA-Z0-9\[\],()@]*=[-a-zA-Z0-9\[\],()@]*)/g;
const reg3 =
  /\?([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*&){1,2}([-a-zA-Z0-9\[\],()@%]*=[-a-zA-Z0-9\[\],()@%]*)$/g;

function getURL(srt) {
  let a = srt.match(reg1);
  return a;
}
function greedyQuery(dataSet) {
  dataSet = getURL(dataSet);
  let result = dataSet.filter((url) => {
    return url.match(reg2) !== null;
  });
  return result;
}
function notSoGreedy(dataSet) {
  dataSet = getURL(dataSet);
  let result = dataSet.filter((url) => {
    return url.match(reg3) !== null;
  });
  return result;
}
