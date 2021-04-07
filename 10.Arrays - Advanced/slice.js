let input = [5, 3, 8, -2, 11, -23];

let r1 = mySlice(input, 2, 4);
let r2 = input.slice(2);
console.log(r1, r2);

function mySlice(arr, start, end) {
  let result = [];

  if (end == undefined) {
    end = arr.length;
  }
  if (start < 0) {
    start += arr.length;
  }
  if (end < 0) {
    end += arr.length;
  }

  for (let i = start; i < end && i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
