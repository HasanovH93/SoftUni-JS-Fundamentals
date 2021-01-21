function solve(arr) {

    let sumOdd = 0;
    let sumEven = 0;

    for(let unparsed of arr){
        let number = Number(unparsed)
        if(number % 2 === 0) {
            sumEven += number;
        }else {
            sumOdd += number;
        }
       

    }
     let diff = sumEven - sumOdd;
    console.log(diff)

}

solve([1,2,3,4,5,6])