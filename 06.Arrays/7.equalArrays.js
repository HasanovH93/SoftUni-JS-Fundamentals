function solve(arr1, arr2) {
  let isIdentical = true;
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += Number(arr1[i]);
    if (arr1[i] !== arr2[i]) {
      isIdentical = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    }
  }
  if (isIdentical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
solve(["1", "2"], ["1", "2"]);
