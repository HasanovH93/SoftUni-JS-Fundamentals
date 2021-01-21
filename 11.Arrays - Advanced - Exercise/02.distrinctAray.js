function district(input) {
  let result = [];

  for (let num of input) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  console.log(result.join(" "));

}

district([7, 8, 9, 7, 2, 3, 4, 1, 2]);
