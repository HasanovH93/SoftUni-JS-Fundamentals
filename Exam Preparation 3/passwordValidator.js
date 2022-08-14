function passwordValidator(input) {
    let password = input.shift();
    let command = input.shift();
 
    while (command !== 'Complete') {
 
        if (command.includes('Make Upper')) {
            let commandArr = command.split(' ');
            let index = Number(commandArr[2]);
            let substr = password.substring(index, index + 1);
            password = password.replace(substr, substr.toUpperCase());
            console.log(password);
        } else if (command.includes('Make Lower')) {
            let commandArr = command.split(' ');
            let lowerIndex = Number(commandArr[2]);
            let replacedLetter = password.substring(lowerIndex, lowerIndex + 1);
            password = password.replace(replacedLetter, replacedLetter.toLowerCase());
            console.log(password);
        } else if (command.includes('Insert')) {
            let commandArr = command.split(' ');
            let insertIndex = Number(commandArr[1]);
            let char = commandArr[2];
 
            if (insertIndex >= 0 && insertIndex < password.length) {
                let firstPart = password.substring(0, insertIndex);
                let secondPart = password.substring(insertIndex);
                password = firstPart + char + secondPart;
                console.log(password);
            }
 
        } else if (command.includes('Replace')) {
            let commandArr = command.split(' ');
            let givenChar = commandArr[1];
            let givenValue = Number(commandArr[2]);
            let givenCharValue = givenChar.charCodeAt(0);
            let sum = givenCharValue + givenValue;
            let newSymbol = String.fromCharCode(sum);
            
            if (password.includes(givenChar)) {
                password = password.split(givenChar).join(newSymbol);
                console.log(password)
            }
 
        } else if (command.includes('Validation')) {
            let nonChar = /\W/g;
            let upperCase = /[A-Z]/g;
            let lowerCase = /[a-z]/g;
            let digit = /\d/g;
            let matchNonchar = password.match(nonChar);
            let matchUpperCase = password.match(upperCase);
            let matchLowerCase = password.match(lowerCase);
            let matchDigit = password.match(digit);
 
            if (password.length < 8) {
                console.log(`Password must be at least 8 characters long!`);
            }
            if (matchNonchar) {
                console.log(`Password must consist only of letters, digits and _!`);
            }
            if (!matchUpperCase) {
                console.log(`Password must consist at least one uppercase letter!`);
            }
            if (!matchLowerCase) {
                console.log(`Password must consist at least one lowercase letter!`);
            }
            if (!matchDigit) {
                console.log(`Password must consist at least one digit!`);
            }
        }    
        command = input.shift();
    }
}