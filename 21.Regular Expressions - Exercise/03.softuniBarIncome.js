function barIncome(input) {

    let totalPrice = 0;
    while(input[0] != 'end of shift'){
        let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(\d+(?:\.\d+)?)\$/
        let line = input.shift();
        let match = pattern.exec(line);

        if(match != null){
            let [_,name,product,quantity,price] = match;
            console.log(`${name}: ${product} - ${(quantity * price).toFixed(2)}`);
            totalPrice += quantity * price;
        }
        

    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
barIncome(
 [
    "%George%<Croissant>|2|10.3$",
    "%Peter%<Gum>|1|1.3$",
    "%Maria%<Cola>|1|2.4$",
    "end of shift",
  ]
);
