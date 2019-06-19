// https://github.com/vvscode/js--interview-questions/blob/master/topics/closures.md
// (fix with let variable)
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}