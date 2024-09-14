// Define the interpolation function
function interpolation({ step, start, end, callback, duration }) {
  let stepDuration = duration / step;
  let distance = (end - start) / step;
  let i = 0;
  const intervalId = setInterval(() => {
    if (i >= step) {
      clearInterval(intervalId);
      return;
    }
    let x = start + i * distance;
    let y = (i + 1) * stepDuration;
    callback([x, y]);
    i++;
  }, stepDuration);
}
