function solve(fNum, oper, sNum) {
  let firstNumber = fNum;
  let operator = oper;
  let secondNumber = sNum;
  let result = 0;

  switch (oper) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
  }
  console.log(result.toFixed(2));
}
solve(5, "+", 10);
