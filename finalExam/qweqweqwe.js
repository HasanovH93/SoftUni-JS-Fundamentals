function solve(input) {
    let usersEmail = input.shift();
    let newArr= [];
 
    while (input[0] !== 'Complete') {
        let tokens = input.shift().split(' ');
        let order = tokens[0];
        switch (order) {
            case 'Make':
                let toDo = tokens[1];
                if (toDo === 'Upper') {
                    usersEmail = usersEmail.toUpperCase()
                    console.log(usersEmail);
                } else if (toDo === 'Lower') {
                    usersEmail = usersEmail.toLowerCase()
                    console.log(usersEmail);
                }
                break;
            case 'GetDomain':
                let count = tokens[1];
                let domain = usersEmail.slice(-count)
                console.log(domain);
                break;
            case 'GetUsername':
                let index = usersEmail.indexOf('@');
                let userName = usersEmail.substring(0, index);
                console.log(userName);
                if (!usersEmail.includes('@')){
                    console.log(`The email ${usersEmail} doesn't contain the @ symbol.`)
                }
                 break;
            case 'Replace':
                let char = tokens[1];
                if (usersEmail.includes(char)){
                    usersEmail = usersEmail.replaceAll(char,'-')
                    console.log(usersEmail);
                }     
            case 'Encrypt': 
                for (let el of usersEmail){
                    let num = el.charCodeAt();
                    newArr.push(num);
                    
                }
                
            break;
        }
    }
        console.log(newArr.join(' '));
}

solve([
    "AnotherMail.com",
    "Make Lower",
    "GetUsername",
    "Replace a",
    "Complete",
  ]);
  