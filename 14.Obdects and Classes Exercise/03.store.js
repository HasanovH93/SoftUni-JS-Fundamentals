function storeProvision(currentStocks, forDelivery) {
  let totalStocks = {};

  for (let i = 0; i < currentStocks.length; i += 2) {
    let currentProduct = currentStocks[i];

    totalStocks[currentProduct] = Number(currentStocks[i + 1]);
  }
  for(let i = 0; i < forDelivery.length; i += 2){
      let currentProduct = forDelivery[i];
      if(!totalStocks.hasOwnProperty(currentProduct)){
          totalStocks[currentProduct] = 0
      }
      totalStocks[currentProduct] += Number(forDelivery[i + 1]);
  }
 for (const product of Object.keys(totalStocks)){
     let quantity = totalStocks[product];
      console.log(`${product} -> ${quantity}`);
 }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
