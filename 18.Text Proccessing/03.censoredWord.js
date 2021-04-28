function censoredWord(string, word) {
   let tokens = string.split(word);
   console.log(tokens.join("*".repeat(word.length)));
}
censoredWord("A small sentence small  with some words", "small");
