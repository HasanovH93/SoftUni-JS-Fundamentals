function passValidator(password) {
  function isLengthEnough(stringPassword) {
    return stringPassword.length >= 6 && stringPassword.length <= 10;
  }

  function isIncludeLettersAndDigits(stringPassword) {
    for (const elementIndex of stringPassword) {
      let element = elementIndex.charCodeAt(0);
      if (
        !(element >= 65 && element <= 90) &&
        !(element >= 97 && element <= 122) &&
        !(element >= 48 && element <= 57)
      ) {
        return false;
      }
      
    }
    return true;
  }

  function isHavingAtLeastTwoDigits(stringPassword) {
    let count = 0;
    for (const elementIndex of stringPassword) {
      let element = elementIndex.charCodeAt(0);
      if (element >= 48 && element <= 57) {
        count++;
      }
    }
    return count >= 2 ? true : false;
  }
  
  let isLengthValid = isLengthEnough(password);
  let isLettersAndDigitsOlny = isIncludeLettersAndDigits(password);
  let isTwoDigits = isHavingAtLeastTwoDigits(password);

  if (isLengthValid && isLettersAndDigitsOlny && isTwoDigits) {
    console.log("Password is valid");
  }
  if (!isLengthValid) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isLettersAndDigitsOlny) {
    console.log("Password must consist only of letters and digits");
  }
  if (!isTwoDigits) {
    console.log("Password must have at least 2 digits");
  }
}
passValidator("MyPass12&");
