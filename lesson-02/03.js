/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 36 // тестовое значение, можно изменять (балл)
let grade     //оценка студента
// your code

switch (true) {
    case score >= 0 && score <= 49:
        grade = "F"
        break;
    case score >= 50 && score <= 69:
        grade = "D"
        break;
    case score >= 70 && score <= 79:
        grade = "C"
        break;
    case score >= 80 && score <= 89:
        grade = "B"
        break;
    case score >= 90 && score <= 100:
        grade = "A"
        break;
} console.log(grade);





// if (score>=0 && score<=49) {
//     grade = "F"
// } else if (score>=50 && score<=69){
//     grade = "D"
// } else if (score>=70 && score<=79){
//     grade = "C"
// } else if (score>=80 && score<=89){
//     grade = "B"
// } else if (score>=90 && score<=100){
//     grade = "A"
// }

// console.log(grade);
