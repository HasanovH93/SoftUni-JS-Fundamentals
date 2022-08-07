function secretChat(arr) {
  let message = arr.shift();
}

function insertSpace(text, index) {
  let left = text.slice(0, index);
  let right = text.slice(index);
  let result = left + " " + right;
  console.log(result);
  return result;
}
function reverse(text, substring) {
  let index = text.indexOf(substring);

  if (index != -1) {
    let left = text.slice(0, index);
    let right = text.slice(index + substring.length);
    let result = left + right + substring.split("").reverse().join("");
    console.log(result);
    return result;
  } else {
    console.log("error");
    return text;
  }
}
function changeAll(text,substr,replacement){
    let result = text.split(substr).join(replacement)
    console.log(result)
}

changeAll("hellodarVing", "V","l");

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
//   ]
//   )
