<!DOCTYPE html>
<html>
<head>
<title>Web Page Design</title>
<script>
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
alert(numArray);
</script>
</head>
<body>
</body>
</html>
