const Koa = require('koa')
const app = new Koa()
// 传中间件
app.use(async (ctx, next) => {
    ctx.body = '电影首页'
})
app.listen(4455)