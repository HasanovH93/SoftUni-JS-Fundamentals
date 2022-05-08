function ladyBugs(input) {
  let n = input.shift();
  let field = new Array(n).fill(0);
  let bugIndexes = input.shift().split(" ");

  for (let index of bugIndexes) {
    index = Number(index);
    if (field[index] != undefined) {
      field[index] = 1;
    }
  }
  for (let command of input) {
    let tokens = command.split(" ");
    let startingIndex = Number(tokens[0]);
    if (field[startingIndex] == 1) {
      let currentIndex = startingIndex;
      let directions = tokens[1].split(" ");
      let offset = Number(tokens[2]);

      if (directions == "left") {
        offset *= -1;
      }

      while (
        currentIndex >= 0 &&
        currentIndex < n &&
        field[currentIndex] == 1
      ) {
        currentIndex += offset;
      }
   
      field[startingIndex] = 0;
      if(currentIndex >= 0 && currentIndex < n) {
        field[currentIndex] = 1;
      }
      
    }
  }
  console.log(field.join(" "));
}
ladyBugs([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']
);
