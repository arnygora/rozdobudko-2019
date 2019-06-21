// https://www.codewars.com/kata/students-final-grade

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

const minCountProjects = 2, middleCountProjects = 5, highCountProjects = 10,
    lowCountExams = 50, middleCountExams = 75, extraCountExams = 90;

function finalGrade(examCount, projectsCount) {
    if (examCount > extraCountExams || projectsCount > highCountProjects) {
        return 100;
    } else if (examCount > middleCountExams && projectsCount >= middleCountProjects) {
        return 90;
    } else if (examCount > lowCountExams && projectsCount >= minCountProjects) {
        return 75;
    } else {
        return 0;
    }
}
console.log(finalGrade(100, 12));  // 100
console.log(finalGrade(99, 0));    // 100
console.log(finalGrade(10, 15));   // 100
console.log(finalGrade(85, 5));    // 90
console.log(finalGrade(55, 3));    // 75
console.log(finalGrade(55, 0));    // 0
console.log(finalGrade(20, 2));    // 0

// https://www.codewars.com/kata/find-the-calculation-type
function calcType(firstNumber, secondNumber, result) {
    if (firstNumber + secondNumber === result) {
        return "addition";
    } else if (firstNumber * secondNumber === result) {
        return "multiplication"
    } else if (firstNumber - secondNumber === result) {
        return "subtraction"
    } else if (firstNumber / secondNumber === result) {
        return "division"
    } else {
        throw new Error("Invalid enter data")
    }
}
console.log(calcType(1, 2, 3));
console.log(calcType(3, 2, 6));
console.log(calcType(10, 7, 3));
console.log(calcType(10, 2, 5));

// https://www.codewars.com/kata/build-a-square
function buildSquare(number) {
    let b = "";
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            b = b + `+\t`
        }
        b = b + `\n`
    }
    return b;
}
console.log(buildSquare(2));
console.log(buildSquare(3));
console.log(buildSquare(4));
