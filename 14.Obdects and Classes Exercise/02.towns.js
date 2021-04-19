function townsToObject(input) {
  for (const city of input) {
    let currCity = city.split(" | ");
    let latitude = Number(currCity[1]);
    let longitude = Number(currCity[2]);

    let obj = {
      town: currCity[0],
      latitude: latitude.toFixed(2),
      longitude: longitude.toFixed(2),
    };
    console.log(obj);
  }
}

townsToObject([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
