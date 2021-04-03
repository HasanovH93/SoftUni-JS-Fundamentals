function check(num1, num2, num3) {
  let totalNegaive = 0;
  if (isNegative(num1)) {
    totalNegaive++;
  }
  if (isNegative(num2)) {
    totalNegaive++;
  }
  if (isNegative(num3)) {
    totalNegaive++;
  }

  if (totalNegaive % 2 == 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
  function isNegative(number) {
    return number < 0;
  }
}
