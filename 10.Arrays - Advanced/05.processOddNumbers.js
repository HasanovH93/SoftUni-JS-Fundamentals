function oddNumbers(arr){

  let oddIndexes = arr.filter((x, i) => i % 2 === 1);

  let doubled = oddIndexes.map(x => x * 2);
  
  let result = doubled.reverse().join(' ');
  console.log(result);

}
oddNumbers([10, 15, 20, 25]);