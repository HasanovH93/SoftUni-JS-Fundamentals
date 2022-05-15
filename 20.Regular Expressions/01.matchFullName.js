function matchFullName(input) {
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

  let matches = input.match(pattern);
  let names = "";
  for (const name of matches) {
    names += " " + name
  }
  console.log(names.trim());
}
matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
