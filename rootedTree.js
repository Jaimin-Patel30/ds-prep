process.stdin.resume();
process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', (data) => {
    input += data
})
// process.stdin.on('end', (data) => {
// })
process.on('SIGINT', () => {
    mainFn()
    process.exit();
});

mainFn = () => {
    let data = input.split('\n');
    let testCases = parseInt(data.shift());
    let i = 0
    while (i < testCases) {
        const vs = parseInt(data.shift())
        let counter = 1
        const vmap = initiateVMap(vs)
        while (counter < vs) {
            const edge = data.shift().split(' ')
            vmap[parseInt(edge[1])-1]++
            counter++
        }
        console.log(findRoot(vmap))
        i++
    }
}
const findRoot = (arr) => {
    let rootC = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            rootC++
        }
    }
    return rootC - 1
}
const initiateVMap = (v) => {
    let i = 0
    const vmap = []
    while (i < v) {
        vmap.push(0)
        i++
    }
    return vmap
}
