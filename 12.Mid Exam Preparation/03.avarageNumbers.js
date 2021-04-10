function solve(input) {
  let numbers = input.split(" ").map(Number);
  const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;

  let sorted = numbers
    .filter((x) => x > average)
    .sort((a, b) => b - a)
    .slice(0, 5);

  if (sorted.length == 0) {
    console.log("No");
  } else {
    console.log(sorted.join(" "));
  }
}

solve("1");
