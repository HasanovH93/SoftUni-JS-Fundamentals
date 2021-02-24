function productsList(arr) {

    let sortedArr = arr.sort();
    let sortedL = sortedArr.length;
   
    for(let i = 0; i<sortedL;i++){
        console.log(`${i+1}.${sortedArr[i]}`);
    }



}

productsList(["Potatoes", "Tomatoes", "Onions", "Apples"]);
