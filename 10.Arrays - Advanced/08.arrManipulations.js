function arrayManipulations(input) {
    let arr = input.shift().split(" ").map(Number);
  
    for (let i = 0; i < input.length; i++) {
      let [command, firstNumber, secondNumber] = input[i].split(" ");
  
      let firstNum = Number(firstNumber);
      let secondNum = Number(secondNumber);
  
      switch (command) {
        case "Add":
          add(firstNum);
          break;
        case "Remove":
          remove(firstNum);
          break;
        case "RemoveAt":
          removeAt(firstNum);
          break;
        case "Insert":
          insert(firstNum, secondNum);
          break;
      }
    }
    function add(el) {
      arr.push(el);
    }
    function remove(num) {
      arr = arr.filter((el) => el !== num);
    }
    function removeAt(index) {
      arr.splice(index, 1);
    }
    function insert(num, index) {
      arr.splice(index, 0, num);
    }
    console.log(arr.join(" "));
  }

arrayManipulator([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);