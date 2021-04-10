function arrManipulator(arrOfNumbers, commands) {
  for (const command of commands) {
    let tokens = command.split(" ");
    let currentCommand = tokens[0];

    if (currentCommand === "add") {
      let index = Number(tokens[1]);
      let element = Number(tokens[2]);
      
      arrOfNumbers.splice(index, 0, element);
    } else if (currentCommand === "addMany") {
      let index = Number(tokens[1]);
      tokens.splice(0, 2);
      let numbersToAd = tokens.map(Number);
      arrOfNumbers.splice(index, 0, ...numbersToAd);
    } else if (currentCommand === "contains") {
      let result = arrOfNumbers.indexOf(+tokens[1]);
      console.log(result);
    } else if (currentCommand === "remove") {
      let index = Number(tokens[1]);
      arrOfNumbers.splice(index, 1);
    } else if (currentCommand === "shift") {
      let position = tokens[1];
      for (let i = 0; i < position; i++) {
        let firstNumber = arrOfNumbers.shift();
        arrOfNumbers.push(firstNumber);
      }
    } else if (currentCommand === "sumPairs") {
      let resultArr = [];
      if (arrOfNumbers.length % 2 !== 0) {
        arrOfNumbers.push(0);
      }
      for (let i = 0; i < arrOfNumbers.length - 1; i + 2) {
        let firstNum = arrOfNumbers.shift();
        let secondNumber = arrOfNumbers.shift();
        let sum = firstNum + secondNumber;
        resultArr.push(sum);
      }
      arrOfNumbers = resultArr;
    } else if (currentCommand === "print") {
      console.log(`[ ${arrOfNumbers.join(", ")} ]`);
    }
  }
}

arrManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
