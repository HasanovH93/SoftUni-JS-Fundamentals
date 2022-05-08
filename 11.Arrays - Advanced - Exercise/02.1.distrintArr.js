function distrArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currElement = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let nextElement = arr[j];
      if (currElement === nextElement) {
        i--;
        arr.splice(j, 1);
      }
    }
  }
  console.log(arr.join(" "));
}
distrArr([7, 8, 9, 7, 2, 3, 4, 1, 1, 2]);
