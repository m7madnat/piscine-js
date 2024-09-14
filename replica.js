function replica(target, ...sources) {
  sources.forEach(source => {
    Object.entries(source).forEach(([key, value]) => {
      if (value && typeof value === 'object') {
        if (Array.isArray(value)) {
          target[key] = Array.isArray(target[key]) ? target[key] : [];
          target[key] = value.map(item => 
            (item && typeof item === 'object') ? replica({}, item) : item
          );
        } else if (value instanceof Date) {
          target[key] = new Date(value);
        } else if (value instanceof RegExp) {
          target[key] = new RegExp(value);
        } else {
          target[key] = replica(
            target[key] && typeof target[key] === 'object' && !Array.isArray(target[key]) 
              ? target[key] 
              : {}, 
            value
          );
        }
      } else {
        target[key] = value;
      }
    });
  });

  return target;
}
