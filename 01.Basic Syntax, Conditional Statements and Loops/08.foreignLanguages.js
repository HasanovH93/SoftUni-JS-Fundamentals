function solve(input) {
  if (input === "USA" || input === "England") {
    console.log("English");
  } else if (input === "Argentina" || input === "Mexico" || input === "Spain") {
    console.log("Spanish");
  } else {
    console.log("unknown");
  }
}

solve("Spain");
