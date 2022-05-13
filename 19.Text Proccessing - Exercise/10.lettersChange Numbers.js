function letterChange(input){
   
    let words = input.split(" ").filter((element) => element !== "");
    let totalSum = 0;

   const isUppercase = (letter) => letter.toUpperCase() === letter;
   const getAlphabetPosition = (letter) => letter.charCodeAt(0) - 96;
   
   words.forEach((element) => {
   let letterBefore = element[0];
   let letterAfter = element[element.length - 1] ;
   let number = +element.substring(1,element.length -1);
   
   let beforePosition = getAlphabetPosition(letterBefore.toLowerCase());
   let afterPosition = getAlphabetPosition(letterAfter.toLowerCase());
   
   if(isUppercase(letterBefore)){
       number /= beforePosition
   }else {
       number *= beforePosition
   }
   if(isUppercase(letterAfter)){
       number -= afterPosition
   }else {
       number += afterPosition
   }
   totalSum += number
   });
   console.log(totalSum.toFixed(2))
}
letterChange('A12b s17G');
letterChange('P34562Z q2576f   H456z')