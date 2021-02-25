function district(arr) {
  let resultArr = [];
  for (const element of arr) {
    if (!resultArr.includes(element)) {
      resultArr.push(element);
    }
  }
  console.log(resultArr.join(' '));
}

district([7, 8, 9, 7, 2, 3, 4, 1, 2]);
