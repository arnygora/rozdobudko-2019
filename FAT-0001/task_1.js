// 1.  Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
const string1 = '(2).plus(3).minus(1)';

const makeStringMathExpression = (string) => {
       function makeOperator(word) {
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

    /* fixme    make universal function for any condition
        if (operators.some((key, index, array) => array[index] === item)) {
        const operators = [
        {plus: 'plus'},
        {minus: 'minus'},
        {substruction: 'substruction'},
        {division: 'division'},
    ];
        */

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
