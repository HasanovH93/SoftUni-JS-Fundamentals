function parking(input) {
  let archive = new Set();

  for (const line of input) {
    let [command, carPlate] = line.split(", ");

    if (command == "IN") {
      archive.add(carPlate);
    } else {
      archive.delete(carPlate);
    }
  }
  if (archive.size == 0) {
    console.log("Parking Lot is Empty");
  }
  let result = Array.from(archive);
  result.sort();
  for (const car of result) {
    console.log(car);
  }
}
parking([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
