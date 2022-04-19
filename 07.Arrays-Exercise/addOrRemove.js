function addOrRemove(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item === "add") {
      newArr.push(i + 1);
    } else if(item === "remove") {
      newArr.pop(i);
    }
  }
  if(newArr.length === 0) {
    console.log("Empty")
  }else {
    console.log(newArr.join(" "));
  }
}
addOrRemove([]);
