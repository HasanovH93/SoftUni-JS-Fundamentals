function solve(arr) {
  let initialString = arr.shift();
  let line = arr.shift();
  let startIndex;
  let endIndex;
  while (line !== "Travel") {
    let [action, firstParam, secondParam] = line.split(":");

    switch (action) {
      case "Add Stop":
        startIndex = Number(firstParam);
        if (startIndex < 0 || endIndex >= initialString.length) {
          break;
        }
        let value = secondParam;
        let firstPart = initialString.slice(0, startIndex);
        let secondPart = initialString.slice(startIndex);

        initialString = firstPart + value + secondPart;
        console.log(initialString);

        break;
      case "Remove Stop":
        startIndex = Number(firstParam);
        endIndex = Number(secondParam);

        if (!initialString[startIndex] || !initialString[endIndex]) {
            console.log(initialString)
          break;
        }

        let substr = initialString.substring(startIndex, endIndex + 1);
        initialString = initialString.replace(substr, "");
        console.log(initialString);

        break;
      case "Switch":
        let oldValue = firstParam;
        let newValue = secondParam;
        let pattern = new RegExp(oldValue,'g')
        initialString =  initialString.replace(pattern,newValue)
        console.log(initialString)


        break;
    }

    line = arr.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${initialString}`)
}

solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
