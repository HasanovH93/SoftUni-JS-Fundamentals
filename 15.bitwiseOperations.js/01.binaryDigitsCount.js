function binaryCount(num, binaryNumber) {
  let arr = [];
  let counter = 0;
  while (num !== 0) {
    let leftOver = num % 2;

    if (leftOver == binaryNumber) {
        arr.push(0)
      counter++;
    }else {
        arr.push(1)
    }
    num = parseInt(num / 2);
  }
  console.log(arr.reverse())
  console.log(counter);
}

binaryCount(20, 0);
