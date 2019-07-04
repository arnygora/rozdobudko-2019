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
console.log(countAllArguments(1)(3)(2)());
console.log(countAllArguments(0)(3)(1)(5)());
