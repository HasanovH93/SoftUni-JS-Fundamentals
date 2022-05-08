function solve(input) {
  let students = +input.shift();
  let lectures = +input.shift();
  let bonus = +input.shift();

  input = input.sort((a, b) => b - a);
  let lecturesCount = input.shift();
  let maxBonus = (lecturesCount / lectures) * (5 + bonus);
  maxBonus = Math.ceil(maxBonus);
  if(input.length > 0){
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${lecturesCount} lectures.`);
  }else {
    console.log(`Max Bonus: 0.`);
    console.log(`The student has attended 0 lectures.`);
  }
 
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
