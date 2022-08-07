function mirrorWords(input) {
  let text = input[0];

  let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;
  let result = []

  let match = pattern.exec(text);
  let counter = 0;
  while (match != null) {
    counter++;

    let word1 = match[2];
    let word2 = match[3]
    let reversed = word2.split("").reverse().join("");

    if(word1 == reversed){
      result.push(`${word1} <=> ${word2}`)
    }

    match = pattern.exec(text);
  }
  if(counter == 0){
    console.log(`No word pairs found!`)
  }else {
    console.log(`${counter} word pairs found!`)
    }

    if(result.length == 0){
        console.log(`No mirror words!`)
    }else {
        console.log("The mirror words are:")
        console.log(result.join(" ,"))
    }
  
}

mirrorWords([
  "#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@",
]);
