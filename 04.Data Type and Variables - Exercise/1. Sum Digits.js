function solve(input) {
  let str = input.toString();
  let sum =  0;
  for(let i = 0; i< str.length; i++) {
     
    sum += Number(str[i])
  
      
  }
  console.log(sum)

}

solve(245678)