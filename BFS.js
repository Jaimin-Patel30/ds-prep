// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// let input = '';
// process.stdin.on('data', (data) => {
//     input += data
// })
// // process.stdin.on('end', (data) => {
// // })
// process.on('SIGINT', () => {
//     mainFn()
//     process.exit();
// });

const vMap = []
let visited = []
let queue = []
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
            vmap[parseInt(edge[1]) - 1]++
            counter++
        }
        console.log(findRoot(vmap))
        i++
    }
}

const DFS = (start) => {
    visited[start] = 1
    console.log('visited : ' + start)
    for (let p = 0; p < (vMap[start] ? vMap[start].length : 0); p++) {
        if (visited[vMap[start][p]] === 0) {
            DFS(vMap[start][p])
        }
    }
}

const BFS = (start) => {
    if (visited[start] === 0) {
        visited[start] = 1
        console.log('visited : ' + start)
    }
    for (let p = 0; p < (vMap[start] ? vMap[start].length : 0); p++) {
        console.log('visited : ' + vMap[start][p])
        visited[vMap[start][p]] = 1
        queue.push(vMap[start][p])
    }
    if (queue.length > 0) {
        BFS(queue.shift())
    }
}

const addEdge = (u, v) => {
    if (!vMap[u]?.length) {
        vMap[u] = [v]
    } else {
        vMap[u].push(v)
    }
}

exports.fun = () => {
    addEdge(1, 3)
    addEdge(1, 2)
    addEdge(2, 5)
    addEdge(2, 4)
    addEdge(5, 6)
    visited = [0, 0, 0, 0, 0, 0, 0]
    BFS(1)
    // DFS(1)
}
