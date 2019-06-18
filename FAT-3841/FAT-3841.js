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
