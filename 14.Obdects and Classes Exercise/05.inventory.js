function inventoryOrdering(input) {
  let heroes = [];

  for (const data of input) {
    let info = data.split(" / ");
    let hero = info[0]
    let level = info[1];
    let items = info[2].split(", ").join(", ");
    let currHero = {
      hero,
      level,
      items
    };
   heroes.push(currHero);
  }
 heroes.sort((a,b) => a.level - b.level);
 
 for (const hero of heroes) {
   console.log(`Hero: ${hero.hero}`);
   console.log(`Level => ${hero.level}`);
   console.log(`Items => ${hero.items}`);
 }
}

inventoryOrdering([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
