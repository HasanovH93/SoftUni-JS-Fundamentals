function stringManipulator(arr) {
    let str = arr.shift()
    let index = 0;
    while (arr[index] !== 'End') {
        let [command, arg1, arg2] = arr[index].split(' ');
        switch (command) {
            case 'Translate':
                while (str.includes(arg1)) {
                    str = str.replace(arg1,arg2)
                }
                console.log(str);
                break;
            case 'Includes':
                if (str.includes(arg1)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Start':
                if (str.startsWith(arg1)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                str = str.toLowerCase()
                console.log(str);
                break;
            case 'FindIndex':
                let lastIndex = str.lastIndexOf(arg1);
                console.log(lastIndex);
                break;
            case 'Remove':
                str = str.split('');
                str.splice(arg1, arg2);
                str = str.join('')
                console.log(str);
                break;
        }
        index++;
    }
}
stringManipulator(["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
    "End"])
console.log('_______________________________');
stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])