function solve(input) {
  let nums = input.shift().split(" ").map(Number);
  let index;
  while (input[0] != "Finish") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];
    let value = Number(tokens[1]);
    switch (command) {
      case "Add":
        nums.push(value);
        break;
      case "Remove":
        index = nums.indexOf(value);
        nums.splice(index, 1);
        break;
      case "Replace":
        index = nums.indexOf(value);

        nums.splice(index, 1, Number(tokens[2]));
        break;
      case "Collapse":
        for (let i = 0; i < nums.length; i++) {
          let currNum = nums[i];
          if (currNum < value) {
            index = nums.indexOf(currNum);
            nums.splice(index, 1);
           i--
          }
        }
        break;
    }
  }
  console.log(nums.join(" "));
}
// solve(["1 4 5 19",
// "Add 1",
// "Remove 4",
// "Finish"])

solve(["1 1 -1 1", "Collapse 8", "Finish"]);
