function search(collection,numbers) {
    
    let elementsToCut = numbers[0];
    let elementsToDelete = numbers[1];
    let elementsToFind = numbers[2];

    let modifiedArr = collection.slice(0,elementsToCut)
    modifiedArr.splice(0,elementsToDelete);
    
    let counter = 0;
    for(let i = 0; i < modifiedArr.length; i++) {
       if(elementsToFind === modifiedArr[i]){
           counter++;
       }

    }

    console.log(`Number ${elementsToFind} occurs ${counter} times.`);

    

}

search([5, 2, 3, 4, 1, 6],
         [5, 2, 3]
    );