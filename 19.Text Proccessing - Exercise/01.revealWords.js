function revealWords(words, string) {


    words = words.split(", ");
    for (const word of words) {
        
        string =  string.replace('*'.repeat(word.length),word)
       
    }
    console.log(string)
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
