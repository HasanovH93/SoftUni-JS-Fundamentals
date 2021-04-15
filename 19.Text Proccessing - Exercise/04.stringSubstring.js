function stringSubstring(searchedWord,string){
 let words = string.split(" ");
 for (const word of words) {
     if(searchedWord.toLowerCase() == word.toLowerCase()){
         console.log(searchedWord);
         return;
     }
    }
    console.log(`${searchedWord} not found!`)
}
stringSubstring('Javascript',
'JavaScript is the best programming language')