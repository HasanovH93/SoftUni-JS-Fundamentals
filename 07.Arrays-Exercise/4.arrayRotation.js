function solve(arr,rotationsCount) {

    for(let i = 1; i<= rotationsCount; i++) {
        let firstElement = arr[0];
        arr.shift(firstElement)
        arr.push(firstElement);
    }
    console.log(arr.join(" "))
}
solve ([51, 47, 32, 61, 21], 2)