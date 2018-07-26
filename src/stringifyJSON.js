// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log(obj)
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'number') {
    return String(obj);
  } else if (typeof obj === 'boolean') {
    return obj ? 'true' : 'false';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj) === true) {
    if (obj.length === 0) {
      return '[]';
    } else {
      return '[' + obj.reduce((acc, cv) => {
        return [...acc, stringifyJSON(cv)]}, []) + ']';
    };
  } else if (typeof obj === 'object') {
    if (obj.functions !== undefined) {
      return '{}';
    } else if (Object.entries(obj).length === 0) {
      return '{}';
    } else {
    return '{' + Object.keys(obj).reduce((acc, cv) => {
      return [...acc, stringifyJSON(cv) + ':' + stringifyJSON(obj[cv])]
      }, []).join(',') + '}';
    }
  } else {
    return '{}';
  }
};
