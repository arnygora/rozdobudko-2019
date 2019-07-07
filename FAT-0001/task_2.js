/* 2.  Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c',...
реализуйте ее так, чтобы она вернула строку '1*b*1c….' */
function makeSimpleString() {
    const argumentsArray = Array.from(arguments).concat();
    const sign = argumentsArray.shift();
    return argumentsArray.map(item => item + sign).join('')
}

const string = makeSimpleString('*', '1', 'b', '1c');
console.log(string);