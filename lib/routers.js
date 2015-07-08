var Router = require('./router')

var Backbone = window.Backbone

var Routers = Backbone.Collection.extend({
    model: Router,

    //API returns routers list in routerInfo this fixes it
    parse: function(resp, xhr) {
        return resp.routerInfo
    }

})

module.exports = Routers
