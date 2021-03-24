function printCertificate(grade, names) {
  let fullName = getFullName(names[0], names[1]);
  if (grade < 3) {
    console.log(`${fullName} does not qualify`);
  } else {
    printheader();
    console.log(fullName);
    formatGrade(grade);
  }
}

printCertificate(3.5, ["A.", "B."]);

function printheader() {
  console.log(` ~~~-   {@}   -~~~`);
  console.log(`~~~-  Certificate -~~~`);
  console.log(`~~~-  ~---~  -~~~`);
}

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function formatGrade(grade) {
  let myGrade = grade;

  myGrade = myGrade.toFixed(2);

  if (myGrade < 3.0) {
    console.log("Fail (2)");
  } else if (myGrade < 3.5) {
    console.log(`Poor (${myGrade})`);
  } else if (myGrade < 4.5) {
    console.log(`Good (${myGrade})`);
  } else if (myGrade < 5.5) {
    console.log(`Very good (${myGrade})`);
  } else {
    console.log(`Exellent (${myGrade})`);
  }
}
