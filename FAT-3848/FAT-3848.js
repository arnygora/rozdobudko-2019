/* TASK: you have an array, ( [1, 2, 3, 4, 5] )
create function, that will show each element from array each 2 seconds */

let array = [1, 2, 3, 4];

function promise(nextItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(nextItem);
            resolve();
        }, 2000);
    })
}

array.reduce((accumulator, nextItem) => {
   return accumulator.then(() => {
       return promise(nextItem)
   });
}, Promise.resolve());


