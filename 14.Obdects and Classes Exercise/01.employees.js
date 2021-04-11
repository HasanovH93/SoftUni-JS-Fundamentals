function employeesPersonalNumber(input) {

    for (const name of input) {
        let currName = name;
        let obj = {
            name: currName,
            personalNum: currName.length
        };
        console.log(`Name: ${currName} -- Personal Number:${obj.personalNum}`);
        
    }
  

}


employeesPersonalNumber([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])