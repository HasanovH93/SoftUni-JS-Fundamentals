function employeesPersonalNumber(input) {

    for(let name of input) {
        let singlePerson = {
            name: name,
            personalNum: name.length
        }
        console.log(`Name: ${singlePerson.name} -- Personal Number: ${singlePerson.personalNum}`)
    }
}


employeesPersonalNumber([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )