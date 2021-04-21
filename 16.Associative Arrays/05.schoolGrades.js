function grades(arr) {
  let result = new Map();
  for (const line of arr) {
    let tokens = line.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);

    if (!result.has(name)) {
      result.set(name, []);
    }

    let existing = result.get(name);
    for (let grade of grades) {
      existing.push(grade);
    }
  }
  let sorted = Array.from(result);

  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, grades] of sorted) {
    let avarage = 0;
    for (let grade of grades) {
      avarage += grade;
    }
    avarage /= grades.length;
    console.log(`${name}: ${avarage.toFixed(2)}`);
  }
}
grades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
