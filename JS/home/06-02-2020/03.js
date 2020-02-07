/* Write a function called “convertObjectToList” which converts an object literal into an array of arrays.*/

var object = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(object) {
  console.log(Object.entries(object))
}
convertListToObject(object)
