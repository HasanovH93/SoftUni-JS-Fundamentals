function sequenceOfElements(arr){
    
    let newArr = [];
    let secArr = [];
    for(let i = 0;i < arr.length; i++){
        secArr = [];
        for(let j = i; j < arr.length; j++){
            if(arr[i] === arr[j]){
                secArr.push(arr[j]);
            }else {
                break;
            }
            if(secArr.length > newArr.length){
                newArr = secArr;
            }
        }
        
    }

console.log(newArr.join(" "));


}
sequenceOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])