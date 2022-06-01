'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', (data) => {
    input += data
})
// process.stdin.on('end', (data) => {
// })
process.on('SIGINT', () => {
    let data = input.split('\n');
    let testCases = parseInt(data.shift());
    let i = 0
    while (i < testCases) {
        const N = parseInt(data.shift())
        const answers = data.shift().split(' ')
        let largestNum = 0
        for (let p = 0; p < answers.length; p++) {
            let ans = parseInt(answers[i])
            if (largestNum < ans) {
                largestNum = ans
            }
        }
        console.log(largestNum)
        // console.log('N = ', N)
        // console.log('ans : %j', answers)
        i++
    }
    process.exit();
});
