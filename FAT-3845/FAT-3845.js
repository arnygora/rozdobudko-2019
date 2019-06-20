// Fibonacci function
const result = function fibonacci(value) {
    if (value === 0) {
        return true
    }
    return value * fibonacci(value - 1);
};
// console.log(result(5));

let value = 5;
let result1 = 1;
for (let i = 0; i <= value; i++) {
    if (i <= value) {
        result1 *= i;
    }
}
    console.log(result1);

