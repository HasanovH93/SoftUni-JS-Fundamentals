function dungeonestDark(arr) {
  let rooms = arr[0].split("|");
  let health = 100;
  let coins = 0;
  let isFinished = true;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i].split(" ");

    if (room[0] === "potion") {
      let currHealth = Number(room[1]);
      if (health <= 100) {
        if (health + currHealth >= 100) {
          currHealth = 100 - health;
          health = 100;
        } else {
          health += currHealth;
        }
        console.log(`You healed for ${currHealth} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    } else if (room[0] === "chest") {
      let foundCoins = Number(room[1]);
      console.log(`You found ${foundCoins} coins.`);
      coins += foundCoins;
    } else {
      let currentMonster = room[0];
      let attackMonster = Number(room[1]);
      health -= attackMonster;
      if (health > 0) {
        console.log(`You slayed ${currentMonster}.`);
      } else {
        console.log(`You died! Killed by ${currentMonster}.`);
        console.log(`Best room: ${i + 1}`);
        isFinished = false;
        break;
      }
    }
  }
  if (isFinished) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
