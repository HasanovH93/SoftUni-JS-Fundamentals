function solve(input) {
    let list = input.shift().split(", ");
    let index;
    let tokens = input.shift().split(" - ");
    while (tokens[0] !== "End") {
      
      let command = tokens[0];
      let element1 = tokens[1];
      switch (command) {
        case "Add":
          if (!list.includes(element1)) {
            list.push(element1);
          } break;
        case "Remove":
          if (list.includes(element1)) {
             let index = list.indexOf(element1);
          list.splice(index, 1);
          } break;
        case "Bonus phone":
          let tokens2 = element1.split(":");
          let oldPhone = tokens2[0];
          let newPhone = tokens2[1];
          if (list.includes(oldPhone)) {
              index = list.indexOf(oldPhone);
              list.push(newPhone);
          } break;
        case "Last":
          if (list.includes(element1)) {
              list.splice(index, 1);
              list.push(element1);
          } break;
          
      }
  tokens = input.shift().split(" - ");
    }
   
    console.log(list.join(", "));
  }


solve([
    "SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End",
  ]);
  console.log("--------");
  solve([
    "HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - Hasan:Iphone5",
    "End",
  ]);
  console.log("--------");
  solve([
    "SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Add - SamsungA50",
    "Remove - IphoneSE",
    "End",
  ]);