function phoneBook(arr) {
    // let result = {};
    // for (const line of arr) {
    //    let tokens = line.split(' ');
    //    let name = tokens[0];
    //    let phone = tokens[1];
    //    result[name] = phone;
    // }
    // for (const name in result) {
    //     console.log(`${name} -> ${result[name]}`);
    // }

    let result = new Map();
    for (const line of arr) {
      let [name, phone] = line.split(' ');

      result.set(name,phone);
      
    }
    for(let key of result.keys()) {
      console.log(key, '->', result.get(key));
    }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
