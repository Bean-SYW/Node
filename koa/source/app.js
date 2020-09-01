const SYW = require('./syw')
const app = new SYW()

// app.use((req,res)=>{
//     res.writeHead(200)
//     res.end('Hello SYW')
// })

app.use(ctx => {
    ctx.body = "hehe ctx"
    ctx.res.end(ctx.body)
})

app.listen(3000,()=>{
    console.log('server listen at 3000')
})