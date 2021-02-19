function solve(firstArr,secondArr){

    for(let firstArrElement of firstArr){
        for(let secArrElement of secondArr){

            if(firstArrElement === secArrElement){
                console.log(firstArrElement)
            }
        }
    }

}

solve(
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']

)
