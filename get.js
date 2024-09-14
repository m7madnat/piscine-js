function get(src, path) {
    const keys = path.split('.');
    
    let result = src;
    
    for (let key of keys) {
      if (result === undefined || result === null) {
         return undefined;
      }
      result = result[key];
    }
    
    return result;
  }
  