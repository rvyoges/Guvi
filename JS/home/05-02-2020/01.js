//Annonyms functions and IIFE
//Print odd numbers in an array
<!DOCTYPE html>
<html>
<head>
<title>Web Page Design</title>
<script>
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var odds = [];
var oddNumbers = function(nums) 
{
    for (var i = 0; i < nums.length; i++) 
    {
        if ((nums[i] % 2) == 1) 
        {
            odds.push(nums[i]);
                console.log(odds);
        }
    }
};
oddNumbers(nums);
alert(odds);
</script>
</head>
<body>
</body>
</html>
/* OUTPUT:
1,55,11,19,17,13 */
