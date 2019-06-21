// Fibonacci function
const result = function fibonacci(value) {
    if (value === 0) {
        return true
    }
    return value * fibonacci(value - 1);
};
console.log(result(5));

// loop
let value = 5; 
let result2 = 1;
for (let i = 1; i <= value; i++) {
    result2 = result2 * i;
}
console.log(result2);

