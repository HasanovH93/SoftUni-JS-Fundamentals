function numbersSorting(input) {
  let newArr = [];
  for (let i = 0; i < input.length; i++) {
    let element = Number(input[i]);
    if (element < 0) {
      newArr.unshift(element);
    } else {
      newArr.push(element);
    }
  }
  for (const element of newArr) {
    console.log(element);
  }
}

numbersSorting(["3", "-2", "0", "-1"]);
