function destMapper(input) {
  const pattern = /[=\/][A-Z][a-zA-Z]{2,}[=\/]/g;
  let points = 0;
  let destinations = [];
  const foundMatches = input.match(pattern);
  
  if(foundMatches){
    foundMatches.forEach((element) => {
        let regex = /^(.).*\1$/g;
        if (element.match(regex)) {
          element = element.substr(1, element.length - 2);
          points += element.length;
          destinations.push(element);
        }
      });
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}

destMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
