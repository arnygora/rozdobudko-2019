// 1
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

// 2
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

// 3
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

// 4
// https://www.codewars.com/kata/sum-mixed-array
const array = ['  12    ', '21px', '45.36vvfv', 'oih', 'wef212', '5458', '849jhi'];

function makeMeANumber(inputArray) {
    const newArray = [];
    inputArray.forEach((value) => {
        if (!isNaN(parseFloat(value))) {
            newArray.push(parseFloat(value));
        }
    });
    return newArray.reduce((accumulator, nextValue) => {
        return accumulator + nextValue;
    });
}
console.log(makeMeANumber(array));

// 5
// https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep
function countSheeps(numberOfSheeps) {
    let string = [];
    for (let i = 1; i <= numberOfSheeps; i++) {
        string.push(`${i} sheep...`);
    }
    return string.join('')
}
console.log(countSheeps(3));

// 6
// https://www.codewars.com/kata/shortest-word
const string = "Давно выяснено Lorem Ipsum используют потому обеспечивает более или менее стандартное заполнение шаблона";

function deleteWords(inputString) {
    const arr = [];
    const filtered = () => inputString.split(' ').filter(item => item.length < 6);
    filtered().forEach(item => arr.push(`Length of "${item}" => ${item.length}\n`));
    return arr.toString().replace(/,/g," ");
}
console.log(deleteWords(string));

// 7
// https://www.codewars.com/kata/credit-card-issuer-checking
function getIssuer(value) {
    value = value.toString();
    const amex1 = 34, amex2 = 37,
        discover = 6011,
        mastercard1 = 51, mastercard2 = 52, mastercard3 = 53, mastercard4 = 54, mastercard5 = 55,
        visa = 4;
    if (value.startsWith(amex1)
        || value.startsWith(amex2)
        && value.length === 15) {
        return "AMEX";
    } else if (value.startsWith(discover) && value.length === 16) {
        return "DISCOVER";
    } else if (value.startsWith(mastercard1)
        || value.startsWith(mastercard2)
        || value.startsWith(mastercard3)
        || value.startsWith(mastercard4)
        || value.startsWith(mastercard5)
        && value.length === 16) {
        return "MasterCard";
    } else if (value.startsWith(visa)
        && (value.length === 13 || value.length === 16)) {
        return "VISA"
    } else {
        return "UNKNOWN CARD"
    }
}
console.log(getIssuer(4111111111111111));
console.log(getIssuer(4111111111111));
console.log(getIssuer(4012888888881881));
console.log(getIssuer(378282246310005));
console.log(getIssuer(6011111111111117));
console.log(getIssuer(5105105105105100));
console.log(getIssuer(5105105105105106));
console.log(getIssuer(9111111111111111));

// 8
// https://www.codewars.com/kata/extract-values-and-units
function splitValue(value) {
    const numeric = [];
    const unit = [];
    const split = value.split('');

    for (let i = 0; i < split.length; i++) {
        (!isNaN(parseFloat(split[i])))
        ? numeric.push(split[i])
        : unit.push(split[i])
    }
    // TODO {val: 12, units: "px"} як зробить такий формат ?
    const createNewObject = () => {
        const getNumericValue = numeric.join('');
        const getUnitValue = unit.join('');
        return ({
            [`val: ${getNumericValue}`] : `units: "${getUnitValue}"`
        })
    };
    return createNewObject();
}
console.log(splitValue('12px'));
console.log(splitValue('55vw'));
console.log(splitValue('54%'));
console.log(splitValue('2em'));
