function solve(input) {
  let arrOfNumbers = input;
  let modifyNumbersArr = [];
  let fistArrSum = 0;
  let secondArrSum = 0;
  let arrLength = arrOfNumbers.length;
  
  for (let i = 0; i < arrLength; i++) {
    let currentNumber = arrOfNumbers[i];
    

    fistArrSum += currentNumber;
    let newNumber = 0;

    if (currentNumber % 2 === 0) {
      newNumber = currentNumber + i;
     
    } else {
      newNumber = currentNumber - i;
      
    }
    modifyNumbersArr.push(newNumber);
    secondArrSum += newNumber;
  }

  console.log(modifyNumbersArr);
  console.log(fistArrSum)
  console.log(secondArrSum)
}

solve([5, 15, 23, 56, 35]);
