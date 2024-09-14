function debounce(f, time) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      f(...args)
    }, time)
  }
}

function opDebounce(f, time, set = {
  leading: false
}) {
  let timeout
  return function (...args) {

    if (timeout) {
      clearTimeout(timeout)
    }
    if (set.leading && !timeout) {
      f(...args)
    }
    timeout = setTimeout(() => {
      if (!set.leading) {
        f(...args)
      }
      timeout = null
    }, time)
  }
}