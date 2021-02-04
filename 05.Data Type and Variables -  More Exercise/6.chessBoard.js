function chessBoard(n){
    let currentColor = "black";
    let secondColor = "";
    console.log('<div class="chessboard">');
    for(let i = 1; i<= n; i++){
        console.log(' <div>');
        for(let j = 0;  j < n; j++){
            let color = "black";

            console.log(`<span class="${currentColor}"></span>`)
            secondColor = currentColor
            currentColor = secondColor === 'black' ? 'white' : 'black'
        }
        console.log(' </div>')
        if (n % 2 === 0) {
            secondColor = currentColor
            currentColor = secondColor === 'black' ? 'white' : 'black'
        }
    }
    console.log("</div>");
}

chessBoard(3)