function charRange(fChar, sChar) {
  
  let firstSymbolAsNumber = fChar.charCodeAt(0);
  let secondSumbolAsNumber = sChar.charCodeAt(0);;
  let arr = [];
  for(let i = firstSymbolAsNumber + 1; i < secondSumbolAsNumber; i++){
    let currElement = String.fromCharCode(i);
    arr.push(currElement)
  }
  
   console.log(arr.join(" "))
}

charRange("a", "d");
charRange("C", "#");
