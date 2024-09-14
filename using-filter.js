function filterShortStateName(arr) {
  return arr.filter((key) => key.length < 7);
}
function filterStartVowel(arr) {
  let regex = /[aeiou]/gi;
  return arr.filter((key) => {
    if (key[0].match(regex)) {
      return arr;
    }
  });
}

function filter5Vowels(arr) {
  let regex = /[aeiou]/gi;
  return arr.filter((key) => {
    if (key.match(regex).length >= 5) {
      return arr;
    }
  });
}
function filter1DistinctVowel(arr) {
  let regex = /[aeiou]/gi;
  return arr.filter((key) => {
    return new Set(key.toLowerCase().match(regex)).size == 1;
  });
}
function multiFilter(arr) {
  let Regex = /^[AEIOU]/;
  let tagRegex = /[AEIOU]/i;
  return arr.filter((key) => {
    let cap = key.capital.length >= 8;
    let nam = !Regex.test(key.name);
    let tag = tagRegex.test(key.tag);
    let reg = key.region !== "South";

    return cap && nam && tag && reg;
  });
}
