function pyramidOfKingDjoser(base , step){
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;

    let row = 0;
    row ++;
    let currentSize = base;

    while(currentSize > 2){
        let marble = (currentSize * 4) - 4;
        let stone = (currentSize * currentSize) - marble;

        if(row % 5 === 0){
            totalLapis += marble;
        } else {
            totalMarble += marble;
        }

        totalStone += stone;
        currentSize -= 2;
        row++;
    }
    
    let totalGold = 0;

    if(currentSize <= 1){
        totalGold = 1;
    } else {
        totalGold = currentSize * 2;
    }
    
    totalStone = Math.ceil(totalStone * step);
    totalMarble = Math.ceil(totalMarble * step);
    totalLapis = Math.ceil(totalLapis * step);
    totalGold = Math.ceil(totalGold * step);

    let height = Math.floor(row * step);

    let print = `Stone required: ${totalStone}\n` +
    `Marble required: ${totalMarble}\n` +
    `Lapis Lazuli required: ${totalLapis}\n` +
    `Gold required: ${totalGold}\n` +
    `Final pyramid height: ${height}`;

    console.log(print);
}

pyramidOfKingDjoser(23,0.5);