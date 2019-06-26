// 1
// https://www.codewars.com/kata/students-final-grade

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
const minCountProjects = 2;
const middleCountProjects = 5;
const highCountProjects = 10;
const lowCountExams = 50;
const middleCountExams = 75;
const extraCountExams = 90;

function finalGrade(examCount, projectsCount) {
    switch (true) {
        case (examCount > extraCountExams || projectsCount > highCountProjects):
            return 100;
            break;
        case (examCount > middleCountExams && projectsCount >= middleCountProjects):
            return 90;
            break;
        case (examCount > lowCountExams && projectsCount >= minCountProjects):
            return 75;
            break;
        default:
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
    let figure = "";
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            figure = figure + `+\t`
        }
        figure = figure + `\n`
    }
    return figure;
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
    const shortWordsArray = [];
    const filtered = () => inputString.split(' ').filter(item => item.length < 6);
    filtered().forEach(item => shortWordsArray.push(`Length of "${item}" => ${item.length}\n`));
    return shortWordsArray.toString().replace(/,/g, " ");
}
console.log(deleteWords(string));

// 7
// https://www.codewars.com/kata/credit-card-issuer-checking
function getIssuer(cardNumber) {
    const cards = [
        {
            type: 'AMEX',
            prefix: ['34', '37'],
            length: [16],
        },
        {
            type: 'DISCOVER',
            prefix: ['6011'],
            length: [16],
        },
        {
            type: 'MASTERCARD',
            prefix: ['51', '52', '53', '54', '55'],
            length: [16],
        },
        {
            type: 'VISA',
            prefix: ['4'],
            length: [13, 16],
        },
    ];
    let cardValueToString = cardNumber.toString();
    let value = '';
    cards.forEach(item => {
        if (item.prefix.some(prefix => cardValueToString.startsWith(prefix))
            || item.length === cardValueToString.length) {
            // fixme redid without console
            console.log(item.type);
        } else {
            return 'unknown card';
        }
    });
    return value;
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
const extractData = (string) => {
    return `val: ${parseInt(string)}, units: ${string.replace(parseInt(string), '')}`
};
console.log(extractData('12px'));
console.log(extractData('55vw'));
console.log(extractData('54%'));
console.log(extractData('2em'));