function solve(firstArr, secondArr) {
  let firstArray = firstArr;
  let secondArray = secondArr;
  let resultArray = [];
  let firstL = firstArray.length;

  for (let i = 0; i < firstL; i++) {
    let resultArrElement;

    if (i % 2 === 0) {
      resultArrElement = Number(firstArray[i]) + Number(secondArray[i]);
    } else {
       resultArrElement = firstArray[i] + secondArray[i];
    }
    resultArray.push(resultArrElement);
  }
  console.log(resultArray.join(" - "))
}

solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
