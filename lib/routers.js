var Router = require('./router')

var Backbone = window.Backbone

var Routers = Backbone.Collection.extend({
    model: Router
})

module.exports = Routers
