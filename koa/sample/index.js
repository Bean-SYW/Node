const Koa = require('koa');

const app = new Koa();

app.use(async (ctx,next) => {
    const start = new Date().getTime()
    console.log(`strat : ${ctx.url}`)
    await next()
    const end = new Date().getTime()
    console.log(`请求耗时${end - start}ms`)
})

app.use(async (ctx,next) => {
    ctx.body = [
        {
            name:'tom'
        }
    ]
    await next()
})

app.listen(3000)