function petshop(input) {
  let dogs = Number(input[0]);

  let animals = Number(input[1]);

  let total = dogs * 2.5 + animals * 4;

  console.log(total.toFixed(2) + "lv.");
}

petshop([13, 9]);
