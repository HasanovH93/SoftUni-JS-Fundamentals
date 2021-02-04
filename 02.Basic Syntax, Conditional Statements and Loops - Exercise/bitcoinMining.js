function bitcoinMining(array) {
  let bitcoinPrice = 11949.16;
  let goldPrice = 67.51;

  let totalGoldMined = 0;
  let days = 0;
  let firstDay = 0;
  let boughtBitcoin = 0;
  let bitcoinMined = 0;
  let sumBitcoin = 0;

  for (let i = 0; i < array.length; i++) {
    days++;
    let currentMinedGold = array[i];

    if (days % 3 === 0) {
      currentMinedGold *= 0.7;
    }

    let singleDayEarning = currentMinedGold * goldPrice;
    totalGoldMined += singleDayEarning;
    if (totalGoldMined >= bitcoinPrice) {
      bitcoinMined++;
      boughtBitcoin = Math.floor(totalGoldMined / bitcoinPrice);
      totalGoldMined -= bitcoinPrice * boughtBitcoin;
      sumBitcoin += boughtBitcoin;
    }
    if (bitcoinMined === 1) {
      firstDay = days;
    }
  }
  console.log(`Bought bitcoins: ${sumBitcoin}`);
  if (firstDay !== 00) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  console.log(`Left money: ${totalGoldMined.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);
