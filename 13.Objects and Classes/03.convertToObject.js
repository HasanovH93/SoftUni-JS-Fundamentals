function parsingJSON (objAsString){

    let obj = JSON.parse(objAsString)
    let objEntries = Object.entries(obj)
    
    for(let [key,value] of objEntries ){
        console.log(`${key}: ${value}`)
    }
}

parsingJSON('{"name": "Peter", "age": 35, "town": "Plovdiv"}')