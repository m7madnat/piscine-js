function citiesOnly(arr) {
  return arr.map((key) => key.city);
}
function upperCasingStates(arr) {
  let upCase = arr.map((key) => key.split(" "));
  return upCase.map((key) =>
    key.map((word) => word[0].toUpperCase() + word.slice(1))
  );
}
function fahrenheitToCelsius(arr) {
  let regex = /\d+/;
  let feh = arr.map((x) => {
    let done = x.match(regex);
    let fahrenheitToCelsius = ((done - 32) * 5) / 9;
    return Math.round(fahrenheitToCelsius) + "°C";
  });
  return feh;
}

function trimTemp(arr) {
  return arr.map((x) => {
    return {
      city: x.city,
      temperature: x.temperature
        .split("")
        .filter((char) => char !== " ")
        .join(""),
    };
  });
}
function tempForecasts(states) {
  return states.map((item) => {
    const fahrenheit = parseInt(item.temperature);
    const celsius = Math.floor(((fahrenheit - 32) * 5) / 9);
    const capitalizedState = item.state
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    return `${celsius}°Celsius in ${item.city}, ${capitalizedState}`;
  });
}
// console.log(
//   citiesOnly([
//     {
//       city: "Los Angeles",
//       temperature: "  101 °F   ",
//     },
//     {
//       city: "San Francisco",
//       temperature: " 84 ° F   ",
//     },
//   ])
// );

// console.log(upperCasingStates(["alabama", "new jersey"]));
// console.log(fahrenheitToCelsius(["68°F", "59°F", "25°F"]));
// console.log(
//   trimTemp([
//     { city: "Los Angeles", temperature: "  101 °F   " },
//     { city: "San Francisco", temperature: " 84 ° F   " },
//   ])
// );
console.log(
  tempForecasts([
    {
      city: "Pasadena",
      temperature: " 101 °F",
      state: "california",
      region: "West",
    },
  ])
);
