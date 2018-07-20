// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log(obj)
  if (obj === null) {
    return 'null';
  } else if (obj.constructor === Number) {
    return String(obj);
  } else if (obj.constructor === Boolean) {
    return obj ? 'true' : 'false';
  } else if (obj.constructor === String) {
    return '"' + obj + '"';
  } else if (obj.constructor === Array) {
    if (obj.length === 0) {
      return '[]'
    } else
    arr = [];
    arr.push(obj.forEach(elem => stringifyJSON(elem)))
    console.log('arr ', arr)
    return '"[' + arr + ']"'
  }
};
