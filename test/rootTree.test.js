const chai = require('chai')
const expect = chai.expect

describe('test', function () {
    it('test', async () => {
        const app = require('../BFS')
        const input = `2
3  
1 2
3 2
3
1 2
2 3`
        app.fun(input)
    }).timeout(3000000);
})
