function reception(arr){
    
   let employee1 = Number(arr[0]);
   let employee2 = Number(arr[1]);
   let employee3 = Number(arr[2]);
   let students = Number(arr[3]);
   
   let employeeEficiency = employee1 + employee2 + employee3;
    let hours = 0;

    while(students > 0){
        hours++
        if(hours % 4 === 0){
            continue;
        }else {
          students -= employeeEficiency
        }
       
    }

    console.log(`Time needed: ${hours}h.`)

}
reception(['1','2','3','45'])