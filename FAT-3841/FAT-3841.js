// 1. Дана строка символов. В самом длинном слове заменить все буквы «a» на «b».
let string = "Lorem ipsum dolor sit amet adipisaaaicing elit facilis harum itaque nostrum quaerat saepe";

function findLongestWord(inputString) {
    let filterArrayFromString = inputString.split(" ").sort((a, b) => b.length - a.length);

    function replaceLetterInWord() {
        let longestWordFromArray = filterArrayFromString[0];
        return longestWordFromArray.replace(/a/g, 'b');
    }
    return replaceLetterInWord()
}
console.log(findLongestWord(string));

// Определить, является ли строка палиндромом.
function checkIsStringPalindrom(inputString) {
    let reversedString = inputString.split('').reverse().join('');
    return inputString === reversedString;
}
console.log(checkIsStringPalindrom('ene'));
console.log(checkIsStringPalindrom('bene'));
console.log(checkIsStringPalindrom('raba'));