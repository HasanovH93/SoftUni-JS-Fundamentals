function arrModifier(arr) {
    let arrToModify = arr.shift().split(" ").map(Number);

    while (arr[0] != "end") {
        let tokens = arr.shift().split(" ");
        let command = tokens[0];
        let firstIndex = +tokens[1];
        let secondIndex = +tokens[2];
        switch (command) {
            case "swap":
                let temporary = arrToModify[firstIndex];
                arrToModify[firstIndex] = arrToModify[secondIndex];
                arrToModify[secondIndex] = temporary;

                break;
            case "multiply":
                arrToModify[firstIndex] *= arrToModify[secondIndex];
                break;
            case "decrease":
                for (let i = 0; i < arrToModify.length; i++) {
                    arrToModify[i]--;
                }
                break;
        }
    }

    console.log(arrToModify.join(", "));
}

arrModifier([
    "23 -2 321 87 42 90 -123",
    "swap 1 3",
    "swap 3 6",
    "swap 1 0",
    "multiply 1 2",
    "multiply 2 1",
    "decrease",
    "end",
]);
