function emojiDetector([input]) {

  let threshold = 1;
  let coolEmojis = [];
  let digits = input.match(/\d/g).map(Number);
  for (let digit of digits) {
    threshold *= digit;
  }
  let emojis = input.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/gm);

 for (const emoji of emojis) {
    
    let chars = emoji.slice(2,-2);
    let coolness = 0;
    for (const char of chars) {
        coolness += char.charCodeAt(0)
    }
     if(coolness >= threshold) {
         coolEmojis.push(emoji);

     }
 }
 console.log(`Cool threshold: ${threshold}`)
 console.log(`${emojis.length} emojis found in the text. The cool ones are:`)
 console.log(coolEmojis.join("\n").trim())
}
emojiDetector([
  "In the S(-ofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
