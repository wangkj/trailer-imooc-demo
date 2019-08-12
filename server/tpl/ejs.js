module.exports = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8'>
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <title>Koa Server HTML</title>
            <link href="https://cdn.bootcss.com/twitter-bootstrap/4.1.1/css/bootstrap.css" rel="stylesheet">
            <script src="https://cdn.bootcss.com/twitter-bootstrap/4.1.1/js/bootstrap.js"></script>
            <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
        </head>
        <body>
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <h1>Hi <%= name1 %></h1>
                        <p>This is <%= name2 %></p>
                        <button class="btn">hahaha</button>
                    </div>
                    <div class="col-md-4">
                        <p>测试静态html页面</p>
                    </div>
                </div>
                
            </div>
        </body>
    </html>
`