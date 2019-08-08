const Koa = require('koa')
const app = new Koa()
const { normal} = require('./tpl')
// 传中间件
// app.use(async (ctx, next) => {
//     ctx.body = '电影首页'
// })

app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    ctx.body = normal
})
app.listen(4455)