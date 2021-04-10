function sort(arr){
     
    let sortedBy1 = arr.sort((a,b)=>a.length-b.length);
    let sortedBy2 = sortedBy1.sort((a,b)=> b.localeCompare(a))
    for (const element of sortedBy2) {
        console.log(element)
    }
}
sort(['Deny',
    'omen',
    'test',
    'Default'])