function palindromeInt(input) {
  let arrOfNumber = input;
  let inputL = arrOfNumber.length;
  const isPalindrome = (num) => {
    let startNum = num;
    let reverseNum = Number(num.toString().split("").reverse().join(""));

    if (startNum === reverseNum) {
      return true;
    } else {
      return false;
    }
  };
  for (let i = 0; i < inputL; i++) {
    let currNumber = arrOfNumber[i];
    console.log(isPalindrome(currNumber));
  }
}

palindromeInt([123, 323, 421, 121]);
