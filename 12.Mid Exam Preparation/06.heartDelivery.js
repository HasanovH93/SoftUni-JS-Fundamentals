function heartDelivery(arr) {
  let houses = arr.shift().split("@").map(Number);
  let cupid = 0;
  while (arr[0] !== "Love!") {
    let tokens = arr.shift().split(" ");
    let jump = +tokens[1];
    cupid += jump;
    if (cupid >= houses.length) {
      cupid = 0;
    }
    if (houses[cupid] === 0) {
      console.log(`${cupid} already had Valentine's day.`);
    } else {
      houses[cupid] -= 2;
      if (houses[cupid] === 0) {
        console.log(`Place ${cupid} has Valentine's day.`);
      }
    }
  }

  let missed = 0;
  for (const house of houses) {
    if (house > 0) {
      missed++;
    }
  }
  console.log(`Cupid's last position was ${cupid}.`);
  if (missed > 0) {
    console.log(`Cupid has failed ${missed} places.`);
  } else {
      console.log(`Mission was successful`)
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
