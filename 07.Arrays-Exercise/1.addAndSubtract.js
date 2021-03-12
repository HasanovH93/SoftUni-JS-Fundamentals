function solve(input) {
  let arrOfNumbers = input;
  let newArr = [];
  let firstArraySum = 0;
  let secondArraySum = 0;

  let arrLength = arrOfNumbers.length;

  for (let i = 0; i < arrLength; i++) {
    let currNumber = arrOfNumbers[i];
    firstArraySum += currNumber;

    if (currNumber % 2 === 0) {
      currNumber += i;

      newArr.push(currNumber);
    } else {
      currNumber -= i;
      newArr.push(currNumber);
    }
    secondArraySum += newArr[i];
  }
  
    
  
  console.log(newArr);
  console.log(firstArraySum);
  console.log(secondArraySum);
}

solve([5, 15, 23, 56, 35]);
