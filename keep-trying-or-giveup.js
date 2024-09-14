function retry(count, callback) {
  return async function (...args) {
    let att = 0;
    while (att <= count) {
      try {
        return await callback(...args);
      } catch (error) {
        att++;
        if (att > count) {
          throw new Error(`${error.message}`);
        }
      }
    }
  };
}

function timeout(delay, callback) {
  return async function (...args) {
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), delay)
    );
    const callbackPromise = callback(...args);
    try {
      return await Promise.race([callbackPromise, timeoutPromise]);
    } catch (error) {
      throw error;
    }
  };
}
