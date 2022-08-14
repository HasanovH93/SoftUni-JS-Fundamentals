function decrypting(input) {
    let str = input.shift();
  
    input.forEach(el => {
      let [command, ...rest] = el.split(" ");
      if (command === "Finish") {
        return;
      }
  
      switch (command) {
        case "Replace":
          let currentChar = rest[0];
          let newChar = rest[1];
          while (str.includes(currentChar)) {
            str = str.replace(currentChar, newChar);
          }
          console.log(str);
          break;
                                           
        case "Cut":
          let startIndex = Number(rest[0]);
          let endIndex = Number(rest[1]);
          if (startIndex >= 0 && startIndex <= endIndex  && endIndex >= 0 && endIndex < str.length) {
            str = str.split('');
            str.splice(startIndex, endIndex - startIndex + 1);
            str = str.join('')
            console.log(str);
          } else {
            console.log("Invalid indices!");
          }
          break;
  
        case "Make":
          let upperLower = rest[0];
          upperLower === 'Upper' ? str = str.toUpperCase() : str = str.toLowerCase()
          console.log(str);
          break;
  
        case "Check":
          let checkString = rest[0];
          str.includes(checkString) 
          ? console.log(`Message contains ${checkString}`)
          : console.log(`Message doesn't contain ${checkString}`);
          break;
  
        case "Sum":
          let startIndexes = Number(rest[0]);
          let endIndexes = Number(rest[1]);
          if (startIndexes >= 0 && startIndexes <= endIndexes  && endIndexes >= 0 && endIndexes < str.length) {
            let newStr = str.substring(startIndexes, endIndexes - startIndexes + 2);
            let sum = 0;
            for (let i = 0; i < newStr.length; i++) {
              sum += newStr[i].charCodeAt();
            }
            console.log(sum);
          } else {
            console.log("Invalid indices!");
          }
          break;
      }
    });
  }
decrypting([
  "ILikeSoftUni",
  "Replace I We",
  "Make Upper",
  "Check SoftUni",
  "Sum 1 4",
  "Cut 1 4",
  "Finish",
]); 

console.log("*************");

decrypting([
  "HappyNameDay",
  "Replace p r",
  "Make Lower",
  "Cut 2 23",
  "Sum -2 2",
  "Finish",
]);