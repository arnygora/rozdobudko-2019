/* Дан одномерный массив. Найти среднее арифметическое его элементов. Вывести на экран только те элементы массива,
которые больше найденного среднего арифметического. */
const array = [15, 48, 46, 12, 33, 87, 545, 102, ];

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
}
const result = new WorkWithArray(array);
console.log(result.averageArrayValue);
console.log(result.valuesBiggerThanAverage);