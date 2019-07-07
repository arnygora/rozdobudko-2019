// 7.  Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

function countArguments(argument) {
    if (arguments.length > 1) {
        return Array.from(arguments).reduce((accumulator, nextArgument) => accumulator + nextArgument);
    }
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
console.log(countArguments(2, 5, 6));
console.log(countArguments(2)(5)(6)());