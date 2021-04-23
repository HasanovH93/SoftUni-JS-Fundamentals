function inventoryOrdering(input){
         
      let heroes = []
      
      for(let heroInfo of input) {
          
        let [name,level,items] = heroInfo.split(" / ");

         items
         .split(", ")
         .sort((a,b)=> a.localeCompare(b))
         .join(", ");
         let hero = {
             name:name,
             level:+level,
             items:items

         };
         heroes.push(hero)
         
      }
      let sortedHeroesByLevel = heroes.sort((a,b) => a.level - b.level)

      
    sortedHeroesByLevel.forEach(hero => {
          console.log(`Hero: ${hero.name}`)
          console.log(`Level => ${hero.level}`)
          console.log(`Items => ${hero.items}`)
      })
}

inventoryOrdering([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )