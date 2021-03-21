function matrix(input) {
  const rowGenerator = (num) => {
    let output = "";

    for (let i = 1; i <= num; i++) {
      output += `${num} `;
    }
    return output;
  };

  for (let i = 1; i <= input; i++) {
    console.log(rowGenerator(input));
  }
}
matrix(5);
