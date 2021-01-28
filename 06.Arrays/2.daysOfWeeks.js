function solve(num) {

    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Fiday",
        "Satuday",
        "Sunday"
    ];

    if(num >= 1 && num <= 7){
        console.log(days[num - 1]);
    }else {
        console.log("Invalid day!")
    }


}
solve(7)