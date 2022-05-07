function catCreator(catsArr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let catsInfo = [];

  for (const cat of catsArr) {
    let tokens = cat.split(" ");
    let cats = new Cat(tokens[0], Number(tokens[1]));
    catsInfo.push(cats);
  }

  for (const cat of catsInfo) {
    cat.meow();
  }
}

catCreator(["Mellow 2", "Tom 5"]);
catCreator(["Cany 1", "Hasan 3"]);
