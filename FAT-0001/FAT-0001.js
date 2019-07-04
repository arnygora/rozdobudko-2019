// 1.  Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
const string1 = '(2).plus(3).minus(1)';

const makeStringMathExpression = (string) => {
    // const operandsArray = [];
    // const operatorArray = [];
    // string.split(')').map(item => {
    //     item.split('').map(item => {
    //         if (Number(item)) {
    //             operandsArray.push(+item);
    //         } else if (item.charCodeAt() !== 46) {
    //             operatorArray.push(item);
    //         }
    //     })
    // });
    // console.log(operandsArray);

    function makeOperator(word) {
        // let sign = operatorArray.join('').split('(');
        // for (let operator of sign) {
        switch (word) {
            case 'plus':
                return '+';
                break;
            case 'minus':
                return '-';
                break;
            default:
                return '*'
        }
    }

    function doIt() {
        let str = string1.split(/\(|\)\.?/).slice(1, -1);
        let bb = str.map((item, index, array) => {
            if (item === "plus") {
                return array[index].replace(item, `${makeOperator(item)}`)
            } else if (item === 'minus') {
                return array[index].replace(item, `${makeOperator(item)}`)
            }
            return item
        });
        return bb.join('');
    }

    return eval(doIt());
};

console.log(makeStringMathExpression(string1));

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
        return (+array[index] === +array[index - 1])  // не працює
    });
};
// console.log(checkWordOnSameLetters(string2));

// 6.  Напишите проверку на палиндром (палиндром это фраза, построенная так, что ее можно читать и справа и слева).
const checkPalindrom = (word) => {
    return word === word.split('').reverse().join('');
};
// console.log(checkPalindrom('abba'));

// 8.  Реализовать функцию: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 9
function countAllArguments(argument) {
    function innerFunction(arguments) {
        if (!arguments) {
            return argument
        }
        argument += arguments;
        return innerFunction;
    }

    innerFunction.toString = function () {
        return argument;
    };
    return innerFunction
}

// console.log(countAllArguments(1)(3)(2)());
// console.log(countAllArguments(0)(3)(1)(5)());
