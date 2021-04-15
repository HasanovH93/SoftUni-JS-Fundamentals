function cutAndReverse(string) {
  let firstHalf = string
    .split("")
    .slice(0, string.length / 2)
    .reverse()
    .join("");
  console.log(firstHalf);
  let secondHalf = string
    .split("")
    .slice(string.length / 2, string.lenght)
    .reverse()
    .join("");
  console.log(secondHalf);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
