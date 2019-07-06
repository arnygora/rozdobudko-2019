// 5.  Есть несколько слов, определить состоят ли они из одних и тех же букв('кот', 'ток', 'окт')
const stringData = 'kot, tok, okt';

const getArrayFromString = (string) => string.split(',').map(item => item.trim());

const getCharCodesFromValues = (array) => array.map(word => {
    return word.split('').map((letter, index, array) => letter.charCodeAt(array[index]));
});

const checkWordOnSameLetters = (string) => {
    const arrayFromString = getArrayFromString(string);

    const charCodes = getCharCodesFromValues(arrayFromString);

    const sortedArrayFromcharcodes = charCodes.map(item => item.sort().join(''));
    // console.log(sortedArrayFromcharcodes);
    return sortedArrayFromcharcodes.every((item, index, array) => +array[index] === +array[index - 1]);

    // fixme не працює метод every(), повинно вертати true
};
console.log(checkWordOnSameLetters(stringData));