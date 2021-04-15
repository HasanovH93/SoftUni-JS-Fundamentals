function pascalCaseSplitter(string){

    let words = [];
    let currWord = string[0]
    for(let i = 1; i < string.length; i++){
       
       if(string[i].toUpperCase() !== string[i]){
        currWord = currWord.concat(string[i]); 
       }else {
           words.push(currWord);
           currWord = string[i]
       }
    }
    words.push(currWord)
   console.log(words.join(", "));
  
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');