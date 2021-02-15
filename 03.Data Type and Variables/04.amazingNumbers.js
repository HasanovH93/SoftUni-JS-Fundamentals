function solve(num) {
  let str = num.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  let isContaining9 = sum.toString().includes("9");
  let result = isContaining9 ? `${sum} Amazing? true` : `${num} Amazing? false`;
  console.log(result);
}

solve(1233);
