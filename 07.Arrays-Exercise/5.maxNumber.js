function maxNumber(arr){

    let newArr = [];
    for(let i = 0; i < arr.length -1; i++){
        
        let firstNum = arr[i++];
        let secNum = arr[i]
       
        if(firstNum > secNum){
          newArr.push(firstNum)
          
        }else {
            newArr.push(secNum)
            
        }
    }
    console.log(newArr.join(" "))
}
maxNumber([1, 4, 3, 2])