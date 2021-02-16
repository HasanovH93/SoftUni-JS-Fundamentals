function solve(distance, passengers, price) {
  let fuel = (distance / 100) * 7;
  fuel += passengers * 0.1;
  let costs = fuel * price;
  console.log(`Needed money for trip is ${costs}lv.`);
}
solve(260, 9, 2.49);
