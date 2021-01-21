function solve(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {


    let price = 0;
    for(let i = 1;i<= lostFights;i++){
         if(i % 2 === 0) {
             price += helmetPrice;
         } 
          if (i % 3 === 0){
             price +=swordPrice;
         }
          if (i % 6 === 0){
            price +=shieldPrice;
         }
          if (i % 12 === 0) {
             price += armorPrice;
         }
         
         
}

console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}
solve(7,2,3,4,5)