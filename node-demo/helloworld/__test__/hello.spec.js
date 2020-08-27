test("测试helloworld",() => {
    const helloworld = require('../hello')
    expect(helloworld).toBe('hello world')
})