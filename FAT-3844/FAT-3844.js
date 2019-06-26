/* есть объект, нужно написать функцию, которая вернет его в следующем виде
    [1, 2, 8, 'here we are', 4, 5, true, 12] */
const obj = {
    a: 1,
    b: 2,
    c: 8,
    h: {
        i: 'here we are',
        g: [4, 5, {
            k: true, l: 12
        }]
    }
};

function spreadObject(object) {
    const spreadedValues = [];
    for (let key in object) {
        if (typeof object[key] === "object") {
            spreadedValues.push(...spreadObject(object[key]));
        } else {
            spreadedValues.push(object[key])
        }
    }

    return spreadedValues;
}

console.log(spreadObject(obj));
