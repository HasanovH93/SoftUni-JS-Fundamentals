function solve(num, prec) {
  let ourNum = num;
  let precision = prec;

  if (precision > 15) {
    precision = 15;
  }
  let result = ourNum.toFixed(precision);
  console.log(parseFloat(result));
}

solve(3.150151512312334394343, 2);
