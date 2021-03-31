function printResult(fNum, sNum, tNum) {
    
    // console.log(fNum + sNum - tNum);  // One Line Solution
    
    function sumOfTwoNumbers(fNum, sNum){
      return fNum + sNum;
    }
    function subtract(sum,tNum){
        return sum - tNum;
    }

    let sum = sumOfTwoNumbers(fNum, sNum);
   
    let finalResult = subtract(sum,tNum);

    console.log(finalResult);
}


printResult(23,6,10)