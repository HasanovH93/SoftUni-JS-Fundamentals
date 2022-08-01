function solve(arr) {
    let input = arr.shift().split(' ')
    for (let i = 0; i < Infinity; i++) {
        let currValue = arr[i].split(' ')
        if (currValue[0] === 'Add') {
            input.push(currValue[1]);
        }
        if (currValue[0] === 'Remove') {
            let index = input.indexOf(currValue[1]);
            input.splice(index, 1);
        }
        if (currValue[0] === 'Replace') {
            let index = input.indexOf(currValue[1]);
            let val = currValue[2]
            input.splice(index, 1, val)
        }
        if (currValue[0] === 'Collapse') {
            let num = Number(currValue[1])
            for (let i = 0; i < input.length; i++) {
                if (input[i] < num) {
                    let index = input.indexOf(input[i]);
                    input.splice(index, 1);
                }
            }
        }
        if (currValue[0] === 'Finish') {
            break;
        }
    }
    console.log(input.join(' '));
}

solve(["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"])
console.log("-------")
solve(["1 20 -1 10",
"Collapse 8",
"Finish"])
solve(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])

