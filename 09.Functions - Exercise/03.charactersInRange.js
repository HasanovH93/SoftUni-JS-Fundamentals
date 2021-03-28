function charRange(fChar, sChar) {
  
  let firstSymbolAsNumber = fChar.charCodeAt(0);
  let secondSumbolAsNumber = sChar.charCodeAt(0);
  let smallerNumber = Math.min(firstSymbolAsNumber, secondSumbolAsNumber);
  let biggerNumbe = Math.max(firstSymbolAsNumber,secondSumbolAsNumber)
  let arr = [];
  for(let i = smallerNumber + 1; i < biggerNumbe; i++) {
    let currElement = String.fromCharCode(i);
    arr.push(currElement)
  }
  
   console.log(arr.join(" "))
}

charRange("a", "d");
charRange("C", "#");
