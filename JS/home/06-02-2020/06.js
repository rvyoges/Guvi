var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24],
 ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'],
  ['age', 28], ['role', 'Coder']]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = []
 var newObject={}
   for (var j=0;j<3;j++)
   {
     newObject[arr[0][j][0]]=arr[0][j][1]
   }
   transformEmployeeList.push(newObject)

 for (var j=0;j<3;j++)
   {
     newObject[arr[1][j][0]]=arr[1][j][1]
   }
  transformEmployeeList.push(newObject)
 return tranformEmployeeList;
}
console.log(transformEmployeeData(arr))
