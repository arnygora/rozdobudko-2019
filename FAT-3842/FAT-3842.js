const array1 = [15, 48, 46, 12, 33, 87, 545, 102, 46];
const array2 = [15, 48, 46, 12, 33, 87, 545, 102, 46];

class WorkWithArray {
    constructor(array1, array2) {
        this.array1 = array1;
        this.array2 = array2;
    }

    get replaceMinMaxValuesInArray() {
        // const { array2 } = this.array; не працює
        const replacedArray = [];
        console.log(`original array => ${this.array2}`);

        let max = this.array2.indexOf(Math.max(...this.array2));
        let min = this.array2.indexOf(Math.min(...this.array2));

        for (let key in this.array2) {
            if (+key === max) {
                key = min;
            } else if (+key === min) {
                key = max
            }
            replacedArray.push(array2[key])
        }
        return replacedArray
    }

    get averageArrayValue() {
        return this.array1.reduce((accumulator, nextValue) => {
            return accumulator + nextValue
        }, 0) / 2
    }

    get valuesBiggerThanAverage() {
        return this.array1.filter(item => item > this.averageArrayValue)
    }

    get checkRepeatedValues() {
        const sortedArray = array1.sort();
        return sortedArray.some((item, index, array1) => {
            // console.log(item[index] === item[index - 1], item[index]) // чому не працює з item ?
            return (array1[index] === array1[index - 1])
        })
    }
}

const result = new WorkWithArray(array1, array2);
console.log(result.averageArrayValue);
console.log(result.valuesBiggerThanAverage);
console.log(result.checkRepeatedValues);
console.log(`==========================`);
console.log(`replaced array => ${result.replaceMinMaxValuesInArray}`);
