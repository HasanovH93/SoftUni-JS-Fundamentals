function solve(arr) {
   let sum = 0
    for (const number of arr) {
        if(number % 2 === 0){
         sum += Number(number)
        }
        
    }
    console.log(sum)

}

solve(['1','3','5'])