<!DOCTYPE html>
<html>
<head>
<title>Web Page Design</title>
<script>

/**
 * Gets the median of two sorted arrays.
 *
 * @param {number[]} A The first sorted array.
 * @param {number[]} B The second sorted array.
 * @returns {number} The median of A and B.
 */
function findMedian(A, B) {
  if (A.length === 0 && B.length === 0) {
    return undefined;
  }
  if (A.length === 1 && B.length === 1) {
    return (A[0] + B[0]) / 2;
  }
  if (A.length === 0) {
    return medianOfArray(B);
  }
  if (B.length === 0) {
    return medianOfArray(A);
  }
  if (A.length === 1) {
    return findMedianOfArrayAndValue(B, A[0]);
  }
  if (B.length === 1) {
    return findMedianOfArrayAndValue(A, B[0]);
  }
  if (A.length === 2 && B.length >= 2 && B.length % 2 === 0) {
    if (areValuesInMiddleOfEvenArray(B, A[0], A[1])) {
      return (A[0] + A[1]) / 2;
    }
  }
  if (B.length === 2 && A.length >= 2 && A.length % 2 === 0) {
    if (areValuesInMiddleOfEvenArray(A, B[0], B[1])) {
      return (B[0] + B[1]) / 2;
    }
  }
  
A=[3,6,8,4,2]
B=[4,0,1,3,5]
  var medianA = medianOfArray(A);
  var medianB = medianOfArray(B);
  if (medianA === medianB) {
    return medianA;
  }
  var maxDiscardable = Math.floor(Math.min(A.length / 2 - 1, B.length / 2 - 1));
  if (maxDiscardable < 1) {
    maxDiscardable = 1;
  }
  if (medianA < medianB) {
    A.splice(0, maxDiscardable);
    B.splice(B.length - maxDiscardable);
  } else {
    A.splice(A.length - maxDiscardable);
    B.splice(0, maxDiscardable);
  }
  return(findMedian(A, B))
}
</script>
</head>
<body>
</body>
</html>
