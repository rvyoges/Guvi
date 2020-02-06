<!DOCTYPE html>
<html>
<head>
<title>Web Page Design</title>
<script>
let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
let palindromes = arr.filter(w => {
  let len = w.length;
  for (let i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
alert(palindromes)
</script>
</head>
<body>
</body>
</html>
