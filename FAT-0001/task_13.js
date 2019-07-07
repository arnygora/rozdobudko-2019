// 13.  Полифилл для Promise.All

function promiseAll(...promises) {
    return new Promise((resolve, reject) => {
        const promiseCount = promises.length;
        const resolvedData = [];
        let resolvedCount = 0;

        function checkStatus(data) {
            resolvedData.push(data);
            resolvedCount++;

            if (resolvedCount === promiseCount) {
                resolve(resolvedData)
            }
        }

        promises.forEach((promise) => {
            promise().then((data) => {
                checkStatus(data)
            }).catch((error) => {
                reject(error)
            })
        })
    })
}

const firstPromise = () => {
    return Promise.resolve('Data from the first promise')
};

const secondPromise = () => {
    return Promise.resolve('Data from the second promise')
};

const thirdPromise = () => {
    return Promise.reject('Promise was rejected')
};

promiseAll(firstPromise, secondPromise, thirdPromise)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    });