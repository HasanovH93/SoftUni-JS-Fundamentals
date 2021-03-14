function maxNumber(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currElement = arr[i];
    let isTopInteger = true;
    for (let j = i + 1; j < arr.length; j++) {
      let nextElement = arr[j];

      if (currElement <= nextElement) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      newArr.push(currElement);
    }
  }
  console.log(newArr.join(" "));
}
maxNumber([1, 4, 3, 2]);
