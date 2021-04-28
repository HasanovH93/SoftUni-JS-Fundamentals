function wordsTracker(arr) {
    
    let words = arr.shift().split(' ');
    let result = {};

    for(let word of words){
        result[word] = 0;
    }
    for (const word of arr) {
        if(result.hasOwnProperty(word)){
            result[word]++
        }
    }""
    let sorted = Object.entries(result);
    sorted.sort((a,b)=>  b[1] - a[1]);
      
    for (const word of sorted) {
        console.log(word[0],"-",word[1]);
    }
    
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
