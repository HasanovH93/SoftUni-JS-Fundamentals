function compStore(arr) {
  let clientType = arr.pop();
  let priceWithoutTaxes = 0;
  let taxes = 0;
  let totalPrice = 0;

  for (const component of arr) {
    let price = Number(component);
    if (price > 0) {
      priceWithoutTaxes += price;
    } else {
      console.log("Invalid price!");
      continue;
    }
  }

  if (priceWithoutTaxes === 0) {
   return console.log("Invalid order!");
    
  }

  taxes = priceWithoutTaxes * 0.2;
  totalPrice = taxes + priceWithoutTaxes;

  if (clientType === "special") {
    totalPrice = totalPrice * 0.9;
  }

  console.log("Congratulations you've just bought a new computer!");
  console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
  console.log(`Taxes: ${taxes.toFixed(2)}$`);
  console.log("-----------");
  console.log(`Total price: ${totalPrice.toFixed(2)}$`);
}

// compStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);

compStore([
    'regular'
    ])
    
