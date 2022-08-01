function softuniRec(arr){

    let input = arr.map(Number);
    let e1 = input[0];
    let e2 = input[1];
    let e3 = input[2]
    let efficiency = e1 + e2 + e3
    let studentsCount = input[3];

    let time = 0;

   while(studentsCount > 0){
    time++
    if(time % 4 === 0){
        continue;
    }
   
    studentsCount -= efficiency
   }

   console.log(`Time needed: ${time}h.`)

}
softuniRec(['5','6','4','20'])