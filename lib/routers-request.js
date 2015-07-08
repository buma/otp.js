var Routers = require('./routers')
var utils = require('./utils')

var Backbone = window.Backbone
var $ = window.$

var RoutersRequest = Backbone.Model.extend({
  initialize: function (opts) {
    var self = this
    this.on('change', function () {
      self.request()
    })
  },

  request: function () {
    var m = this


    $.ajax(this.urlRoot, {
      data: utils.filterParams(this.attributes)
    })
      .done(function (data) {
        m.trigger('success', m.processRequest(data))
      })
      .fail(function (data) {
        m.trigger('failure', data)
      })
  },

  processRequest: function (data) {
    return new Routers(data);
  }
})

module.exports = RoutersRequest
