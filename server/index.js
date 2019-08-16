const Koa = require('koa')
const app = new Koa()
// const { normal, ejsTpl, pugTpl} = require('./tpl')
// const ejs = require('ejs')
const pug = require('pug')

// views中间件集成
const views = require('koa-views')
const { resolve } = require('path')

app.use(views(resolve(__dirname,'./views'),{
    extension: 'pug'
}))

app.use(async(ctx, next) => {
    await ctx.render('index',{
        name1: 'max1',
        name2: 'max2'
    })
})

// 传中间件
// app.use(async (ctx, next) => {
//     ctx.body = '电影首页'
// })

// app.use(async (ctx, next) => {
//     ctx.type = 'text/html; charset=utf-8'
   
//     ctx.body = pug.render(pugTpl, {
//             name1: 'Max123',
//             name2: 'Max234'
//         })
// })
app.listen(4455)