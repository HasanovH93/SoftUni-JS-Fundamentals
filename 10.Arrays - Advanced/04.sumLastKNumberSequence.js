function sumLastNumbers(n, k) {
  let newArr = [1];

  for (let i = 0; i < n - 1; i++) {
    let lastElement = newArr.slice(-k);
    let sum = 0;
    for (let element of lastElement) {
      sum += element;
    }
    newArr.push(sum);
  }
  console.log(newArr.join(" "));
}

sumLastNumbers(6, 3);
