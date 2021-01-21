function charRange(fChar, sChar) {
  let firstSymbolAsNumber = fChar.charCodeAt(0);
  let secondSymbolAsNumber = sChar.charCodeAt(0);
  let smallerNumber = Math.min(firstSymbolAsNumber,secondSymbolAsNumber);
  let biggerNumber = Math.max(firstSymbolAsNumber,secondSymbolAsNumber);


  let result = [];

  for (let i = smallerNumber + 1; i < biggerNumber; i++) {
    let currentElement = String.fromCharCode(i);
    result.push(currentElement);
    
  }
  console.log(result.join(" "));
}

charRange("a", "d");
charRange("C", "#");
