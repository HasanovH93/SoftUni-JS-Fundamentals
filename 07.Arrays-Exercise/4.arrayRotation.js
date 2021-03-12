function solve(arr,rotationsCount) {

    for(let i = 0; i< rotationsCount; i++) {
      
       let currNum = arr.shift();
        arr.push(currNum);
    }
    console.log(arr.join(" "))
}
solve ([51, 47, 32, 61, 21], 2)