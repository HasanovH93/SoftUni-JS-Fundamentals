function train(arr) {
  let passangersInWagons = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());

  for (const command of arr) {
    let currentCommand = command.split(" ");
    if (currentCommand[0] === "Add") {
      passangersInWagons.push(Number(currentCommand[1]));
    } else {
      for (let i = 0; i < passangersInWagons.length; i++) {
        if (passangersInWagons[i] + Number(currentCommand[0]) <= maxCapacity) {
          passangersInWagons[i] += Number(currentCommand[0]);
          break;
        }
      }
    }
  }

  console.log(passangersInWagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
