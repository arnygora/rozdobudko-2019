// 6.  Напишите проверку на палиндром (палиндром это фраза, построенная так, что ее можно читать и справа и слева).
const checkPalindrom = (word) => {
    return word === word.split('').reverse().join('');
};
console.log(checkPalindrom('abba'));
console.log(checkPalindrom('aba'));
console.log(checkPalindrom('abbasd'));
