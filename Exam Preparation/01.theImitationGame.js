function decrypting(input) {
  let commands = {
    Move,
    Insert,
    ChangeAll,
  };
  let message = input.shift();

  while (input[0] != "Decode") {
    let line = input.shift();
    let tokens = line.split("|");
    let command = tokens[0];
    message = commands[command](message, tokens[1], tokens[2]);
  }

  console.log(`The decrypted message is: ${message}`);

  function Move(str, num) {
    let start = str.substring(0, num);
    let end = str.substring(num);
    return end + start;
  }
  function Insert(str, index, text) {
    let start = str.substring(0, index);
    let end = str.substring(index);
    return start + text + end;
  }
  function ChangeAll(str, match, text) {
    let tokens = str.split(match);
    return tokens.join(text);
  }
}

decrypting(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
