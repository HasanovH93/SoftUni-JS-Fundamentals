function productsList(arr) {

    let sortedArr = arr.sort((a,b)=>a.localeCompare(b));
    let sortedL = sortedArr.length;
   
    for(let i = 0; i<sortedL;i++){
        console.log(`${i+1}.${sortedArr[i]}`);
    }



}

productsList(["Potatoes", "Tomatoes", "Onions", "Apples"]);
