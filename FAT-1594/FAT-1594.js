// https://github.com/vvscode/js--interview-questions/blob/master/topics/closures.md
// (fix with let variable)
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// Create code for next conditions
// calculate('+')(1)(2); // 3
// calculate('*')(2)(3); // 6
function calculate(operator) {
    const operation = operator;

    return function getFirstOperand(first) {
        const firstOperand = first;
        
        return function getSecondOperand(second) {
            const secondOperand = second;
            let result = 0;
            switch (operation) {
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