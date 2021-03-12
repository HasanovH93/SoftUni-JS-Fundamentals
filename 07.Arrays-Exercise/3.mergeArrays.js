function solve(firstArr, secondArr) {
  let thirdArr = firstArr.map((firstEl, i) => 
   i % 2 == 0 ? Number(firstEl) + Number(secondArr[i]) :  firstEl + secondArr[i]
  );
  
 
  console.log(thirdArr.join(" - "));
}


solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
