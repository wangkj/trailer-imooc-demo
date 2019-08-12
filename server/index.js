const Koa = require('koa')
const app = new Koa()
const { normal, ejsTpl, pugTpl} = require('./tpl')
const ejs = require('ejs')
const pug = require('pug')
// 传中间件
// app.use(async (ctx, next) => {
//     ctx.body = '电影首页'
// })

app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    // ctx.body = ejs.render(ejsTpl, {
    //     name1: 'Max1',
    //     name2: 'Max2'
    // })
    ctx.body = pug.render(pugTpl, {
            name1: 'Max123',
            name2: 'Max234'
        })
})
app.listen(4455)