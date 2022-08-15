function solve(arr) {
  let email = arr.shift();

  let line = arr.shift();

  while (line != "Complete") {
    let tokens = line.split(" ");
    

    if (line == "Make Upper") {
      email = email.toUpperCase();
      console.log(email);
    } else if (line == "Make Lower") {
      email = email.toLowerCase();
      console.log(email);
    } else if (tokens[0] == "GetDomain") {
      let numOfLetters = Number(tokens[1]);

      let startIdex = email.length - numOfLetters;
      let substr = email.substring(startIdex);
      console.log(substr);
    } else if (line == "GetUsername") {
      if (email.includes("@")) {
        let tempTemail = email.split("");
        let symbol = tempTemail.indexOf("@");
        let subst = email.slice(0, symbol);
        console.log(subst);
      } else {
        console.log(`The email ${email} doesn't contain the @ symbol.`);
      }
    } else if (tokens[0] == "Replace") {
      let char = tokens[1];

      while (email.includes(char)) {
        email = email.replace(char, "-");
      }
      console.log(email);
    } else if ("Encrypt") {
      let tempEmail = email.split("");
      let tempLine = "";
      for (const char of tempEmail) {
        let code = char.charCodeAt();
        tempLine += code + " ";
      }
      console.log(tempLine);
    }

    line = arr.shift();
  }
}

// solve([
//   "Mike123@somemail.com",
//   "Make Upper",
//   "GetDomain 3",
//   "GetUsername",
//   "Encrypt",
//   "Complete",
// ]);

solve([
  "AnotherMail.com",
  "Make Lower",
  "GetUsername",
  "Replace a",
  "Complete",
]);
