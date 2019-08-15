module.exports = `
doctype html
html
    head
        meta(charset='utf-8')
        meta(name="viewport" content="width=device-width,initial-scale=1")
        titile Koa Server HTML
        link(href="https://cdn.bootcss.com/twitter-bootstrap/4.1.1/css/bootstrap.css" rel="stylesheet")
        script(src="https://cdn.bootcss.com/twitter-bootstrap/4.1.1/js/bootstrap.js")
        script(src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js")
    body
        .container
            .row
                .col-md-8
                    h1 Hi #{name1}
                    p This is #{name2}
                .col-md-4
                    p 测试动态 pug 模板引擎
`