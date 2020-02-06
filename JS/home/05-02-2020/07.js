<!DOCTYPE html>
<html>
<head>
<title>Web Page Design</title>
<script>
var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
var uniq = names.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
alert(uniq, names) 
</script>
</head>
<body>
</body>
</html>
