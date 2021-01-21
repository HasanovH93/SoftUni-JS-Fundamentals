function search(collection,numbers) {
    
    let elementsToCut = numbers[0];
    let elementsToDel = numbers[1];
    let elementToFind = numbers[2];


    let modifiedArr = collection.slice(0,elementsToCut);
        modifiedArr.splice(0,elementsToDel);
        let counter = 0;
        let modifiedArrL = modifiedArr.length;

        for(let i = 0; i < modifiedArrL; i++ ) {
            if(elementToFind === modifiedArr[i]) {
                counter++
            }
            
        }
    

    console.log(`Number ${elementToFind} occurs ${counter} times.`);

    

}

search([5, 2, 3, 4, 1, 6],
         [5, 2, 3]
    );