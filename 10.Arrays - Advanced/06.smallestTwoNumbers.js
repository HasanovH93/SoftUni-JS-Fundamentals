function smallestNumbers(arr){

    let sorted = arr.sort((a,b) => a-b);
    let smallestTwoNumbers = sorted.slice(0,2);
    console.log(smallestTwoNumbers.join(" "))

}
smallestNumbers([30, 15, 50, 5])