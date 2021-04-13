function meetings(array) {
  let result = {};
  for (const line of array) {
    let [day, name] = line.split(" ");
    if (result.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      result[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (const day in result) {
    console.log(day, "->", result[day]);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
