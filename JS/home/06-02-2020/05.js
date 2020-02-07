/* Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):*/

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
  var newObject={};
    for(var i=0;i<3;i++)
    {
        newObject[arr[i][0]]=arr[i][1]
    }
    return newObject
    }
console.log(fromListToObject(arr))
