function smallestNumbers(arr){

    let sorted = arr.sort((a,b) => a-b).slice(0,2).join(' ');
    console.log(sorted)

}
smallestNumbers([30, 15, 50, 5])