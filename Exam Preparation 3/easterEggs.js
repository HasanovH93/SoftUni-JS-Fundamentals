function easterEggs(arr) {
    let regEx = /[@|#]+(?<color>[a-z]{3,})[@|#]+([^A-Za-z0-9]+)?(\/+)(?<count>\d+)\3/gm
    let str = arr[0];
    let match = regEx.exec(str);
    let valid = [];
    while (match !== null) {
        let color = match.groups.color;
        let count = match.groups.count;
        valid.push([color,count])
        match = regEx.exec(str);
    }
    valid.forEach(egg => {
        console.log(`You found ${egg[1]} ${egg[0]} eggs!`);
    })
}
easterEggs(['er/###@@@@@*$%^&*/5/'])