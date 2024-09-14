function floor(num) {
    let big = 0xfffffffff
    let n = 0;
    if (num >= big) n += big
    if (num <= -big) n -= big
    if (num > 0) {
    while (n <= num) {
      n++;
    }
    return n - 1;
  } else {
    while (n > num) {
      n--;
    }
    return n;
  }
}

function round(num) {
    if (num - floor(num) >= 0.5) {
        return floor(num) + 1
    } else {
        return floor(num)
    }
}
function ceil(num) {
    if (num == 0) {
        return 0
    }
    return floor(num) + 1
}
function trunc(num) {
  
    if (num >= 0) {
        return floor(num)
    } else {
        return ceil(num)
    } 
}