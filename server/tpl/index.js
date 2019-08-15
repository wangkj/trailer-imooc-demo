const normalTpl = require('./html')

module.exports = {
    normal: normalTpl,
    ejsTpl: require('./ejs'),
    pugTpl: require('./pug')
}