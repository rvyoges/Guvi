<!DOCTYPE html>
<html>
<head>
<title>Web Page Design</title>
<script>
var toTitleCase = function (str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};
var str = 'HeRe is a MIXED capitalization StRiNg.';
var str = toTitleCase(str);
alert(str)
</script>
</head>
<body>
</body>
</html>
