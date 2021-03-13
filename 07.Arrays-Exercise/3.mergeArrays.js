function solve(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let firstArrElement = arr1[i];
    let secondArrElement = arr2[i];
    if (i % 2 === 0) {
      newArr.push(Number(firstArrElement) + Number(secondArrElement));
    } else {
      newArr.push(`${firstArrElement}${secondArrElement}`);
    }
  }

  console.log(newArr.join(" - "));
}

solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
