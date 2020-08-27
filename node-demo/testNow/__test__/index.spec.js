const fs = require('fs');

test('测试批量生成测试代码',()=>{
    fs.rmdirSync(__dirname+'/data/__test__',{
        recursive:true
    });

    const src = new (require('../index'))()

    src.genJestSource(__dirname+'/data');
});

// test('测试代码测试',()=>{
//     const src = new (require('../index'))();
//     const ret = src.getTestSource('fun','class');
//     expect(ret).toBe(
//         `
// test('Test-fun',()=>{
// const fun = require('../class');
// const ret = fun()
// //expect(ret).toBe('test fun')})
//         `)})

// test("测试文件名生成",()=>{
//     const src = new (require('../index'))();
//     const ret = src.getTestFileName('/abc/class.js');
//     expect(ret).toBe('/abc/__test__/class.spec.js');
// })