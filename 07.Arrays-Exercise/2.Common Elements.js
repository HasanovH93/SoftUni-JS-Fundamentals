function solve(firstArr,secondArr){
    let firstArray = firstArr;
    let secondArray = secondArr;
    let firstL = firstArray.length;
    let secondL = secondArray.length;


  for(let i = 0; i < firstL ;i++) {
      let firstArrElement = firstArray[i];
      
      for(let j = 0; j <secondL; j++) {
          let secondArrElement = secondArray[j];
          if(firstArrElement === secondArrElement){
              console.log(firstArrElement)
          }

      }

  }


}

solve(
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']

)
