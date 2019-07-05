// 5.  Есть несколько слов, определить состоят ли они из одних и тех же букв('кот', 'ток', 'окт')
const string2 = 'kot, tok, okt';

const checkWordOnSameLetters = (string) => {
    let arrayFromString = string.split(',').map(item => item.trim());

    let charCodesFromLetters = arrayFromString.map(word => {
        return word.split('').map((letter, index, array) => {
            return letter.charCodeAt(array[index])
        })
    });

    let newArrayFromcharcodes = charCodesFromLetters.map(item => item.sort().join(''));
    console.log(newArrayFromcharcodes);
    return newArrayFromcharcodes.every((item, index, array) => {
        // fixme не працює метод every(), чого - хз
        return (+array[index] === +array[index - 1])
    });
};
console.log(checkWordOnSameLetters(string2));