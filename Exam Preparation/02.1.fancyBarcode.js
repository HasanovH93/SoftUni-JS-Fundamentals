function solve(arr){
   
    let pattern = /(@#{1,})([A-Z][a-zA-Z0-9]{4,}[A-Z])(@#{1,})/gm;

    let n = Number(arr.shift())

    for(let i = 0; i<arr.length;i++){
        let barcode = arr[i];
        let match = pattern.exec(barcode);
        let concatenateDigits = '';
        let isValid = false;
        while(match !== null){
            let barcodeText = match[2];
            for(let ch of barcodeText){
                if(Number(ch)){
                    console.log(ch)
                }
            }
            console.log(barcodeText);
            match = pattern.exec(barcode)
        }
    }
}

solve(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
