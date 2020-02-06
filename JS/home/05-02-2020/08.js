<!DOCTYPE html>
<html>
<head>
<title>Web Page Design</title>
<script>
var rotateArray = function(a, inc) {
    for (var l = a.length, inc = (Math.abs(inc) >= l && (inc %= l), inc < 0 && (inc += l), inc), i, x; inc; inc = (Math.ceil(l / inc) - 1) * inc - l + (l = inc))
    for (i = l; i > inc; x = a[--i], a[i] = a[i - inc], a[i - inc] = x);
    return a;
};

var array = ['Jan','Feb','Mar','Apr','May','June'];
var k=5
alert(rotateArray(array.slice(), -k));
</script>
</head>
<body>
</body>
</html>
