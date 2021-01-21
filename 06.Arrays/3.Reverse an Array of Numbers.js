function reverse(n, arr) {

    let newArr = [];
    for( let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    
   
}
let revArr = [];
for(let i= newArr.length - 1; i >= 0; i--) {
    revArr.push(newArr[i]);
}
console.log(revArr.join(' '));
}

reverse(4, [5, 15, 25, 35, 45])