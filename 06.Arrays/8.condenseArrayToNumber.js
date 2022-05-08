function solve(arr) {

   while(arr.length > 1) { 
        let newArr = new Array();

        for(let i = 0 ; i < arr.length - 1; i++) {
            let num1 = arr[i];
            let num2 = arr[i+1];
            let sum = num1+ num2;
            newArr.push(sum);
        }
        arr = newArr;
       
    }
    
    console.log(...arr)
 

}
solve([2,10,3]);