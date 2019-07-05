// 11.  Реализовать cортировку пузырьком

let simpleArr = [55, 9, 7, 3, 64, 8798, 646, 6, 4, 8];

const bubble = (inputArray) => {
    const get = function recursion(array) {
        array.map((item, index, array) => {
            if (array[index] > array[index + 1]) {
                let temp = array[index];
                array[index] = array[index + 1];
                array[index + 1] = temp;
                return recursion(array);
            } else {
                return array;
            }
        });
        return array
    };
    return get(inputArray)
};

console.log(bubble(simpleArr));