function district(arr) {
  let newArr = [];

  for (const element of arr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  console.log(newArr.join(" "));
}

district([7, 8, 9, 7, 2, 3, 4, 1, 2]);
