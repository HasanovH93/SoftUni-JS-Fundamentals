function factorial(firstNumber, secondNumber) {
  function factorialCalculator(number) {
    let result = 1;
    while (number != 1) {
      result *= number;
      number -= 1;
    }
    return result;
  }
  let finalDivision =
    factorialCalculator(firstNumber) / factorialCalculator(secondNumber);

  console.log(finalDivision.toFixed(2));
}
factorial(5, 2);
