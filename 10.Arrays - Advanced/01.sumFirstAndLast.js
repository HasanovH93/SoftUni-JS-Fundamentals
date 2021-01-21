function sumNumbers(arr){ 


    let sArray = arr.shift();
    let fArray = arr.pop();
    

    let result = fArray + sArray;

    console.log(Number(result))

}

sumNumbers([20,30,40])