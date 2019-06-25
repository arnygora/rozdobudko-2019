const array = [15, 48, 46, 12, 33, 87, 545, 102, 46];

class WorkWithArray {
    constructor(array) {
        this.array = array;
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
            // console.log(item[index] === item[index - 1], item[index]) // чому не працює з item ?
            return (array[index] === array[index - 1])
        })
    }
}

const result = new WorkWithArray(array);
console.log(result.averageArrayValue);
console.log(result.valuesBiggerThanAverage);
console.log(result.checkRepeatedValues);
