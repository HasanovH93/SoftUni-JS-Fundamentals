function solve(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let firstElement = arr[i];
    let isTopInteger = true;
    for (j = i + 1; j < arr.length; j++) {
      let nextElement = arr[j];
      if (firstElement <= nextElement) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      newArr.push(firstElement);
    }
  }

  console.log(newArr.join(" "));
}
solve([1, 4, 3, 2]);
