function arrSorting(input) {

    let sortedArr = input.sort((a,b)=>{
        return a-b;
        

    });
    let result = [];
    while(sortedArr.length !== 0){

        let bigNumber = sortedArr.pop();
        let smallNumber = sortedArr.shift();

        result.push(bigNumber)
        result.push(smallNumber)

    }
    console.log(result.join(" "))

    

}

arrSorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);