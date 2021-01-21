function solve(input) {

    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());

    let students = input.map(x => Number(x))
    let maxBonus = 0;
    let maxLectures = 0;

    for (let i = 0; i < studentsCount; i++) {
        let currentLecturesCouunt = students[i];
        let currentBonus = currentLecturesCouunt / lecturesCount * (5 + initialBonus);

        if(currentBonus > maxBonus) {
            maxBonus = Math.ceil(currentBonus);
            maxLectures = currentLecturesCouunt
        }
       
    }
    console.log(`Max Bonus: ${maxBonus}.`)
    console.log(`The student has attended ${maxLectures} lectures.`)
    



    



}

solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )