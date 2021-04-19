function employeesPersonalNumber(input) {
  for (const name of input) {
    let currName = name;
    let obj = {
      name: currName,
      personalNum: currName.length,
    };
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNum}`);
  }
}

employeesPersonalNumber([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
