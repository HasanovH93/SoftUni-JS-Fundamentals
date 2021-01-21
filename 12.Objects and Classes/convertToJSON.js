function objToJSON(name,lastName,hairColor) {
     
        let obj = {
            name,
            lastName,
            hairColor,
        }

        let output = JSON.stringify(obj)
        console.log(output)
}

objToJSON('Peter', 'Smith', 'Blond')