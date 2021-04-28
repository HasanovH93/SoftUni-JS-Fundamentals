function stringOccurrences(string, word) {
    let tokens = string.split(" ");

    let counter = 0;
    for (const token of tokens) {
        if(token == word){
            counter++
        }
    }
    console.log(counter)
}

stringOccurrences("This is a word and it also is a sentence", "is");
