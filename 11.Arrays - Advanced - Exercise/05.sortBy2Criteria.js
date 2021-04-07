function sorted(arr) {
  let sorted = (a, b) => a.length - b.length || a.localeCompare(b);
  arr.sort(sorted);

  console.log(arr.join("\n"));
}
sorted(["Deny", "omen", "test", "Default"]);
