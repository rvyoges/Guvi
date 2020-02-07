/*Write a function called “printAllValues” which returns an newArray of all the input object’s values*/

var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
 var arr=[]
 for (const prop in obj)
 {
   arr.push(obj[prop])
 }
 console.log(arr)
}
printAllValues(obj)
