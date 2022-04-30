function parsingJSON (text){

    let obj = JSON.parse(text)
    let objEntries = Object.entries(obj)
    
    for(let [key,value] of objEntries ){
        console.log(`${key}: ${value}`)
    }
}

parsingJSON('{"name": "Peter", "age": 35, "town": "Plovdiv"}')