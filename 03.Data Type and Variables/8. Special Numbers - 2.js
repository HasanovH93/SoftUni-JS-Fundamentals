function solve(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let stringNum = i.toString();
    for (j = 0; j < stringNum.length; j++) {
      sum += Number(stringNum[j]);
    }
    let result;
    if (sum == 5 || sum == 7 || sum == 11) {
      result = "True";
    } else {
      result = "False";
    }

    console.log(`${i} -> ${result}`);
  }
}
solve(15);
