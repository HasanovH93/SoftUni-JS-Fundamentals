function solve(arr) {
  const delivers = {};
  const sellers = {};
  for (const line of arr) {
    if (line === "End") {
      break;
    }
    const tokens = line.split(" ");
    const command = tokens[0];

    if (command === "Deliver") {
      if (!delivers.hasOwnProperty(tokens[1])) {
        delivers[tokens[1]] = Number(tokens[2]);
      } else {
        delivers[tokens[1]] += Number(tokens[2]);
      }
    } else if (command === "Return") {
      if (Number[tokens[2]] > Object.values(delivers)) {
        return;
      } else {
        if (delivers.hasOwnProperty(tokens[1])) {
          delivers[tokens[1]] -= Number(tokens[2]);
          if ([tokens[2]] === 0) {
            delete delivers[tokens[2]]
          }
        }
      }
    } else if (command == "Sell") {
      if (!sellers.hasOwnProperty(tokens[1])) {
        sellers[tokens[1]] = Number(tokens[2]);
      } else {
        sellers[tokens[1]] += Number(tokens[2]);
      }
    }
  }
  for (let [key, value] of Object.entries(sellers)) {
    console.log(`${key}: ${value.toFixed(2)}`);
  }
  console.log("-----------");

  for (let [key, value] of Object.entries(delivers)) {
    console.log(`${key}: ${value.toFixed(2)}`);
  }

  console.log("-----------");

  function sum(obj) {
    return Object.keys(obj).reduce(
      (sum, key) => sum + parseFloat(obj[key] || 0),
      0
    );
  }

  console.log(`Total Income: ${sum(sellers).toFixed(2)}`);
}
solve([
  "Deliver North 200.30",
  "Sell Peter 30.20",
  "Return Macro 5000.00",
  "Return North 200.30",
  "Sell Peter 50.50",
  "End",
]);
