const inputString = "()[{}][[]{[]}]";

const tokens = [['{', '}'], ['[', ']'], ['(', ')']];

// *** Check if character is an opening bracket ***
function isOpenParenthesis(parenthesisChar) {
    for (let j = 0; j < tokens.length; j++) {
        if (tokens[j][0] === parenthesisChar) {
            return true;
        }
    }
    return false;
}

// *** Check if opening bracket matches closing bracket ***
function matches(topOfStack, closedParenthesis) {
    for (let k = 0; k < tokens.length; k++) {
        if (tokens[k][0] === topOfStack && tokens[k][1] === closedParenthesis) {
            return true;
        }
    }
    return false;
}

// *** Checks if item is any sort of paranthesis ***
function isParanthesis(char) {
    let parenthesis = '{}[]()';
    return parenthesis.indexOf(char) > -1;
}

// *** We excute this function upon the event ***
function isBalanced() {

    const expression = inputString.split('');
    const stack = [];

    for (let i = 0; i < expression.length; i++) {
        if (isParanthesis(expression[i])) {
            if (isOpenParenthesis(expression[i])) {
                stack.push(expression[i]);
            } else {
                if (stack.length === 0) {
                    return false;
                }
                let top = stack.pop(); // pop off the top element from stack
                if (!matches(top, expression[i])) {
                    return false;
                }
            }
        }
    }

    return stack.length === 0;
}
console.log(isBalanced());