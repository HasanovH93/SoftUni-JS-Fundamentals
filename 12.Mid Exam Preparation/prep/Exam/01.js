function hunterGames(arr) {
  let input = arr.map(Number);
  let days = input.shift();
  let players = input.shift();
  let totalEnergy = input.shift();
  let personWater = input.shift();
  let personFood = input.shift();

 
   let totalWater = days * players * personWater;
 
  let totalFood = days * players * personFood;
  let waterDay = 0;
  let foodDay = 0;

  for (let i = 0; i <= input.length; i++) {
    for (let i = 1; i <= days; i++) {
      let wastedEnergy = input.shift();
      totalEnergy -= wastedEnergy;
      if (totalEnergy <= 0) {
        break;
      }
      waterDay++;
      if (waterDay >= 2) {
        totalWater -= totalWater * 0.3;
        totalEnergy += totalEnergy * 0.05;
        waterDay = 0;
      }
      foodDay++;
      if (foodDay >= 3) {
        totalFood -= (totalFood / players);
        totalEnergy += totalEnergy * 0.1;
        foodDay = 0;
      }
    }
  }
  if(totalEnergy >= 1){
    console.log(`You are ready for the quest. You will be left with - ${totalEnergy.toFixed(2)} energy!`)
  }else {
    console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
  }
}

hunterGames([
  "10",
  "7",
  "5035.5",
  "11.3",
  "7.2",
  "942.3",
  "500.57",
  "520.68",
  "540.87",
  "505.99",
  "630.3",
  "784.20",
  "321.21",
  "456.8",
  "330",
]);
