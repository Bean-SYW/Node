// test('callback',done =>{
//     const { callback } = require("..")
//     callback()
//     setTimeout(done,1000)
// })

// test('promise',done =>{
//     const  { promise }  = require("..")
//     promise()
//     setTimeout(done,1000)
// })

// test('generator',done =>{
//     const  { generator }  = require("..")
//     generator()
//     setTimeout(done,1000)
// })

// test('asyncAwait',done =>{
//     const  { asyncAwait }  = require("..")
//     asyncAwait()
//     setTimeout(done,1000)
// })

test('event',done =>{
    const  { event }  = require("..")
    event()
    setTimeout(done,1000)
})