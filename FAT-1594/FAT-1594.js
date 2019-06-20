// https://github.com/vvscode/js--interview-questions/blob/master/topics/closures.md
// (fix with let variable)
for (let i = 0; i < 5; i++) {
    setTimeout(function (i) {
        return function () {
            console.log(i);
        }
    }(i), 1000);
}

// Create code for next conditions
// calculate('+')(1)(2); // 3
// calculate('*')(2)(3); // 6
function calculate(operator) {

    return function getFirstOperand(firstOperand) {

        return function getSecondOperand(secondOperand) {
            let result = 0;
            switch (operator) {
                case "+" :
                    result = firstOperand + secondOperand;
                    break;
                case "*" :
                    result = firstOperand * secondOperand;
                    break;
                default:
                    console.log(`${firstOperand}${operation}${secondOperand}`);
            }
            return result;
        }
    }
}
console.log(calculate('+')(1)(2));
console.log(calculate('*')(2)(3));
//
// // Create code for next conditions
function sum(a) {
    function showResult(argument) {
        a += argument;
        return showResult;
    }

    showResult.toString = function () {
        return a;
    };
    return showResult;
}
console.log(sum(1));
console.log(sum(1)(2));
console.log(sum(3)(4)(5));