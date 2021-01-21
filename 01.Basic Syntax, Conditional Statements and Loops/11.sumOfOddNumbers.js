function solve(count) {
    let numForPrint = 1;
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        console.log(numForPrint);
        sum += numForPrint;
        numForPrint += 2;

        
        
        
    }
    console.log(`Sum: ${sum}`)
}
solve(15)