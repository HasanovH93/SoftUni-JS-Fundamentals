function dictionary(array){
 
    let allWordsAndDefinition = array.shift().toString()
    let command = array.pop()
     
    allWordsAndDefinition = allWordsAndDefinition.split(" | ")
     
    let myNoteBookObjects = {}
     
    for(let line of allWordsAndDefinition){
        let lineSplited = line.split(": ")
        let word = lineSplited[0]
        let definition = lineSplited[1]
     
        if(!myNoteBookObjects.hasOwnProperty(word)){
            myNoteBookObjects[word] = []
            myNoteBookObjects[word].push(definition)
        } else {
            myNoteBookObjects[word].push(definition)
        }
    }
     
     
    let words = array.toString()
    let testingWordArr = words.split(" | ")
     
    let myNoteWordsArr = []
     
    if(command === "Test"){
     
        for(let searchedWord of testingWordArr){
            for(let [keys, valuesArr] of Object.entries(myNoteBookObjects)){
                if(searchedWord == keys){
                    console.log(`${searchedWord}:`)
                    for(let valueSearched of valuesArr){
                        console.log(`-${valueSearched}`)
                    }
                }
            }
        }
    } else if (command === "Hand Over"){
     
        for (let wordKeys of Object.keys(myNoteBookObjects)){
            myNoteWordsArr.push(wordKeys)
        }
        console.log(myNoteWordsArr.join(" "))
     
    }
     
     
     
    }