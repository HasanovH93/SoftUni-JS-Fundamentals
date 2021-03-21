function printResult(input) {
  let inputAsString = input.toString();

  let evenSum = 0;
  let oddSum = 0;

  let inputL = inputAsString.length;
  for (let i = 0; i < inputL; i++) {
    let currElement = Number(inputAsString[i]);

    if (currElement % 2 === 0) {
      evenSum += currElement;
    } else {
      oddSum += currElement;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

printResult(1000435);
