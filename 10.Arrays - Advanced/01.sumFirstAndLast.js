function sumNumbers(arr) {
  let sArray = arr.shift();
  let fArray = arr.pop();

  let result = fArray + sArray;

  console.log(Number(result));
}

sumNumbers([20, 30, 40]);


// function as(input) {

//   let first = Number(input[0]);
//   let last = Number(input[input.length-1]);

//   console.log(first+last);

// }

