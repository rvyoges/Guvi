/* Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.*/

var array = ['GUVI', 'I', 'am', 'Geek'];
function transformFirstAndLast(array) {
 var firstElement=array[0]
 var lastElement=array[array.length-1]
 var newObject={}
 newObject[firstElement]=lastElement
 return newObject;
}
var a=transformFirstAndLast(array)
console.log(a)
