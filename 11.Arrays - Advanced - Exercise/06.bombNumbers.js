function bombDetonate(sequence, bomb) {
  let specialNumber = bomb[0];
  let bombPower = bomb[1];

  while (sequence.includes(specialNumber)) {

    let index = sequence.indexOf(specialNumber);
    let elementsToRemove = bombPower * 2 + 1;
    let startIndex = index - bombPower;

    if (startIndex < 0) {
      elementsToRemove += startIndex;
      startIndex = 0;
    }
    sequence.splice(startIndex, elementsToRemove);
  }
  let finalresult = sequence.reduce((a,b)=>{
   return a + b
},0);
  console.log(finalresult);
  
}

bombDetonate([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
