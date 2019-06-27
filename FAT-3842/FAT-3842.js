const array = [15, 48, 46, 12, 33, 87, 545, 102, 46];
let binaryArray = [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1];

class WorkWithArray {
    constructor(array, binaryArray) {
        this.array = array;
        this.binaryArray = binaryArray;
    }

    get replaceMinMaxValuesInArray() {
        const replacedArray = [];
        console.log(`original array => ${this.array}`);

        let max = this.array.indexOf(Math.max(...this.array));
        let min = this.array.indexOf(Math.min(...this.array));

        for (let key in this.array) {
            if (+key === max) {
                key = min;
            } else if (+key === min) {
                key = max
            }
            replacedArray.push(array[key])
        }
        return replacedArray
    }

    get averageArrayValue() {
        return this.array.reduce((accumulator, nextValue) => {
            return accumulator + nextValue
        }, 0) / 2
    }

    get valuesBiggerThanAverage() {
        return this.array.filter(item => item > this.averageArrayValue)
    }

    get checkRepeatedValues() {
        const sortedArray = array.sort();
        return sortedArray.some((item, index, array) => {
            return (array[index] === array[index - 1])
        })
    }

    get longestRangeSameValues() {
        const arrayOfIndexes = [];
        const counterArray = [];
        let mainCounter = 0;

        binaryArray.forEach((item, index, array) => {
            if (array[index] === 1) {
                arrayOfIndexes.push(index);
                mainCounter++;
                if (mainCounter !== 0) {
                    counterArray.push(mainCounter);
                }
            } else {
                mainCounter = 0;
            }
        });

        let max = 0;
        let min = 0;
        let maxIndex = 0;
        for (let value of counterArray) {
            if (value > max) {
                max = value;
            }
            min = counterArray.indexOf(max) - max + 1;
            maxIndex = counterArray.indexOf(max);
        }

        return `Found biggest range if the same digits: start ${arrayOfIndexes[min]}, end: ${arrayOfIndexes[maxIndex]}`;
    };
}

const result = new WorkWithArray(array, binaryArray);
// console.log(result.averageArrayValue);
// console.log(result.valuesBiggerThanAverage);
// console.log(result.checkRepeatedValues);
console.log(`==========================`);
console.log('original array=> ' + binaryArray);
// console.log(`replaced array => ${result.replaceMinMaxValuesInArray}`);
console.log(result.longestRangeSameValues);
