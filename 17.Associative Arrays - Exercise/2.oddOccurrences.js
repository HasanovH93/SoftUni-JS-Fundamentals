function oddOccurrences(input) {
  let arr = input.split(" ");
  let result = {};
  for (let element of arr) {
    element = element.toLocaleLowerCase();
    if (result.hasOwnProperty(element)) {
      result[element]++;
    } else {
      result[element] = 1;
    }
  }
  
  let filtered = Object.entries(result).filter(([word, count]) => {
    return count % 2 === 1;
  });

  let output = filtered.map((entry) => entry[0]).join(" ");
  console.log(output);
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
