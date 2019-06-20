// 1. Дана строка символов. В самом длинном слове заменить все буквы «a» на «b».
const string = "Lorem ipsum dolor sit amet adipisaaaicing elit facilis harum itaque nostrum quaerat saepe";

function findLongestWord(inputString) {
    const filterArrayFromString = inputString.split(" ").sort((a, b) => b.length - a.length);

    function replaceLetterInWord() {
        const longestWordFromArray = filterArrayFromString[0];
        return longestWordFromArray.replace(/a/g, 'b');
    }
    return replaceLetterInWord()
}
console.log(findLongestWord(string));

// Определить, является ли строка палиндромом.
function checkIsStringPalindrom(inputString) {
    const reversedString = inputString.split('').reverse().join(' ');
    return inputString === reversedString;
}
console.log(checkIsStringPalindrom('ene'));
console.log(checkIsStringPalindrom('bene'));
console.log(checkIsStringPalindrom('raba'));

// 3. Удалить из строки все слова, длина которых меньше пяти символов. В строке не используются знаки препинания
function deleteWords(string) {
    return string.split(" ")
                 .filter((item) => item.length > 5)
                 .join(', ');
}
console.log(deleteWords(string));