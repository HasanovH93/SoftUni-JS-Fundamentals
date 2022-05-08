function solve(input) {
    
    let index = 0;
    let username = input[index++];
    
    let password = username.split('').reverse().join('');
    let tryPass = input[index++];
    let counter = 1;
    let isLogged = true;
    while(tryPass !== password) {
        
      counter++;
      console.log(`Incorrect password. Try again.`)
      if(counter === 4){
          
          isLogged = false;
          console.log(`User ${username} blocked!`)
          break;
      }

      tryPass = input[index++];
    
    }
   if(isLogged) {
    console.log(`User ${username} logged in.`)
   }
    
    


 
}
solve(['sunny','rainy','cloudy','sunny','not sunny']);
