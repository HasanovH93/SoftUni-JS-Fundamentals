function solve(input) {
  let students = +input.shift();
  let lectures = +input.shift();
  let bonus = +input.shift();
  let maxBonus = 0;
  let lecturesCount = 0;
  for (let i = 0; i < input.length; i++) {
    let studentAttendances = Number(input[i]);
    let totalBonus = (studentAttendances / lectures) * (5 + bonus);

    if (totalBonus > maxBonus) {
      maxBonus = totalBonus;
      lecturesCount = studentAttendances;
    }
  }
  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${lecturesCount} lectures.`);
}

solve([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
