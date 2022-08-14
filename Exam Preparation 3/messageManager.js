function messageManager(arr) {
    let users = {};
    let capacity = Number(arr.shift());
    let index = 0;
    while (arr[index] !== 'Statistics') {
        let [command, arg1, arg2, arg3] = arr[index].split('=');
        switch (command) {
            case 'Add':
                if (users.hasOwnProperty(arg1)) {
                    break;
                }
                users[arg1] = { sent: arg2, received:arg3 };
                break;
            case 'Message':
                if (users.hasOwnProperty(arg1) && users.hasOwnProperty(arg2)) {
                    users[arg1].sent = Number(users[arg1].sent) + 1;
                    users[arg2].received = Number(users[arg2].received) + 1;
 
                    let sender = Number(users[arg1].sent) + Number(users[arg1].received);
                    let receiver = Number(users[arg2].sent) + Number(users[arg2].received)
                    if (sender >= capacity) {
                        console.log(`${arg1} reached the capacity!`);
                        delete users[arg1];
                    }
                    if (receiver >= capacity) {
                        console.log(`${arg2} reached the capacity!`);
                        delete users[arg2];
                    }
                }
                break;
            case 'Empty':
                if (arg1 === 'All') {
                    for (user in users) {
                        delete users[user];
                    }
                } else if (users.hasOwnProperty(arg1)) {
                    delete users[arg1];
                }
                break;
        }
        index++
    
    }
    let count = Object.keys(users).length;
    console.log(`Users count: ${count}`);
    for (el in users) {
        let total = Number(users[el].sent) + Number(users[el].received)
        console.log(`${el} - ${total}`);
    }
}
messageManager(["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"])