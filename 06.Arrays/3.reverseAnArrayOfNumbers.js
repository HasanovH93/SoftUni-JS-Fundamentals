function reverse(n, arr) {
  let newArr = [];
 

  for (let i = n - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(...newArr);
}

reverse(3, [10, 20, 30, 40, 50]);
