function arrSorting(arr) {
  let sortedArr = arr.sort((a, b) => a - b);

  let newArr = [];
  while (sortedArr.length !== 0) {
    let lastElement = sortedArr.pop();
    let firstElement = sortedArr.shift();
    newArr.push(lastElement);
    newArr.push(firstElement);
  }
  console.log(newArr.join(" "));
}

arrSorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
