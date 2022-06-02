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
        let totalBox = 0
        const singleCase = data.shift().split(' ')
        const R = parseInt(singleCase[0])
        const C = parseInt(singleCase[1])
        const K = parseInt(singleCase[2])
        for (let p = 1; p <= 8; p++) {
            for (let q = 1; q <= 8; q++) {
                if (calDist(R, C, p, q) <= K) {
                    totalBox++
                }
            }
        }
        console.log(totalBox)
        i++
    }
    process.exit();
});

const calDist = (x1, y1, x2, y2) => {
    const xDist = Math.abs(x1 - x2)
    const yDist = Math.abs(y1 - y2)
    return xDist > yDist ? xDist : yDist
}

const calMoves = (x, y) => {
    const xDist = Math.abs(x - 1) > Math.abs(x - 8) ? Math.abs(x - 8) : Math.abs(x - 1)
    const yDist = Math.abs(y - 1) > Math.abs(y - 8) ? Math.abs(y - 8) : Math.abs(y - 1)
    if (xDist === 0 && yDist === 0) return 3
    else if (xDist === 0 || yDist === 0) return 6
    else return 9
}

// console.log(calDist(1,1,3,7))
// console.log(calDist(2,3,3,7))
// console.log(calDist(1,1,3,4))
// console.log(calMoves(1, 3))
// console.log(calMoves(1, 8))
// console.log(calMoves(2, 3))


