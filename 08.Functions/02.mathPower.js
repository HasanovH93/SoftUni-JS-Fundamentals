function mathpower(num, pow) {
  let result = 1;

  for (let i = 1; i <= pow; i++) {
    result *= num;
  }
  console.log(result);
}
mathpower(2, 10);
