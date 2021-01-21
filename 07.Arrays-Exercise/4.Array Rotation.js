function solve(arr,rotationsCount) {
    let arrayOfElements = arr;
    let rototations = rotationsCount;
    

    for(let i = 0; i < rototations; i++) {
        
        let numberToMove = arrayOfElements.shift();
        arrayOfElements.push(numberToMove);


    }
    console.log(arrayOfElements.join(" "));
}

solve (
    [51, 47, 32, 61, 21], 2
)