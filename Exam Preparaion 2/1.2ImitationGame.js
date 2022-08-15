function solve(arr) {
  let message = arr.shift();
  let currLine = arr.shift();

  while (currLine != "Decode") {
    let [command, p1, p2] = currLine.split("|");
    let tempMessage = "";
    if (command == "Move") {
      p1 = Number(p1);
      let lettersToMove = message.substring(0, p1);
      tempMessage = message.replace(lettersToMove, "");
      tempMessage += lettersToMove;
      message = tempMessage;
    }else if (command == "Insert"){
        p1 = Number(p1);
        tempMessage = message.split("")
        tempMessage.splice(p1,0,p2)
        message = tempMessage.join("")
        
    }else if (command == "ChangeAll"){
      while(message.includes(p1)){
        tempMessage = message.replace(p1,p2)
        message = tempMessage

      }
      message = tempMessage
    }
    currLine = arr.shift();
  }
  console.log(message);
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
