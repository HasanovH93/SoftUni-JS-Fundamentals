function calc(num1, num2, oper) {
  let result = 0;
  switch (oper) {
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
  }

  console.log(result);

  function multiply(number1, number2) {
    return number1 * number2;
  }
  function divide(number1, number2) {
    return number1 / number2;
  }
  function add(number1, number2) {
    return number1 + number2;
  }
  function subtract(number1, number2) {
    return number1 - number2;
  }
}

calc(50, 13, "subtract");
