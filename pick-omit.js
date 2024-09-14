function pick(obj, str) {
    let obj2 = {};
    let keys = Object.keys(obj);
    keys.forEach((key) => {
      if(Array.isArray(str)){
          for(let el of str){
              if (el.includes(key)) {
                  obj2[key] = obj[key];
                }
          }
      }else if (str.includes(key)&&str.length==key.length) {
        obj2[key] = obj[key];
      }
    });
    return obj2;
  }
  function omit(obj, str) {
      let obj2 = {};
      let keys = Object.keys(obj);
      keys.forEach((key) => {
        if (!(str.includes(key))) {
          obj2[key] = obj[key];
        }
      });
      return obj2;
    }
  const agent = { firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false }
  console.log(pick(agent, "ageVerified"));