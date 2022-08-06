function arrayManipulator(nums, commands){
    for(let command of commands){
        let tokens = command.split(' ');
        let operation = tokens[0];
        if(operation === "add"){
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            nums.splice(index, 0 , element);
        } else if(operation === "addMany"){
            let index = Number(tokens[1]);
            tokens.splice(0,2);
            let numsToadd = tokens.map(Number);
            nums.splice(index, 0 , ...numsToadd);
        } else if(operation === "contains"){
            let result = nums.indexOf(Number(tokens[1]));
            console.log(result);
        } else if(operation === "remove"){
            let index = Number(tokens[1]);
            nums.splice(index, 1);
        } else if(operation === "shift"){
            let position = Number(tokens[1]);
            for(let i = 0; i < position; i++){
                nums.push(nums.shift());
            }
        } else if(operation === "sumPairs"){
            let newArray = [];
            if(nums.length % 2 !== 0){
                nums.push(0)
            }
            for(let i = 0; i < nums.length - 1; i += 2){
                let sum = nums[i] + nums[i+1];
                newArray.push(sum);
            }
            nums = newArray;
        } else if(operation === "print"){
            console.log(`[ ${nums.join(", ")} ]`);
            return;
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);