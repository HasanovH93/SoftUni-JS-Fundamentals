function solve(input) {

    let targets = input.shift().split(" ").map(x => Number(x));
    input.pop();
    let shots = input.map(x => Number(x));
    let totalShots = 0;


    for (let i = 0; i < shots.length; i++) {
        let currentShot = shots[i];
        let currentTarget = targets[currentShot];


        if (currentTarget > -1) {
            targets[currentShot] = - 1;
            totalShots++
            for (let j = 0; j < targets.length; j++) {
                if (targets[j] > -1) {
                    if (targets[j] > currentTarget) {
                        targets[j] -= currentTarget;

                    } else {
                        targets[j] += currentTarget;
                    }
                }

            }

        }




    }

    console.log(`Shot targets: ${totalShots} -> ${targets.join(" ")} `)

}


solve(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
