function replaceChars(string){

    let unique = '';
    for(let i=0; i<string.length; i++){
        let currChar = string.charAt(i);
        let nextChar = string.charAt(i+1);
        if(currChar !== nextChar){
            unique += currChar
        }
    }
    console.log(unique)
}
replaceChars('aaaaabbbbbcdddeeeedssaa')