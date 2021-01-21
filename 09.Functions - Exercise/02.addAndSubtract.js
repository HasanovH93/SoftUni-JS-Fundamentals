function printResult(fNum, sNum, tNum) {
  function sumOfTwoNumbers(firstNum, secondNum) {
    return firstNum + secondNum;
  }
  function subtract(sum, lastNumber) {
    return sum - lastNumber;
  }

  let sum = sumOfTwoNumbers(fNum, sNum);

  let finalResult = subtract(sum, tNum);

  console.log(finalResult);
}

printResult(23, 6, 10);
