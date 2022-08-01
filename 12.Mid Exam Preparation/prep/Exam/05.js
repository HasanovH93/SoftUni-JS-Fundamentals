function solve(input) {
    let list = input.shift().split(", ");
    let tokens = input.shift().split(" - ");
    let index;
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
              index = list.indexOf(element1);
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
    }
   
    console.log(list.join(", "));
  }