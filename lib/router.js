var Backbone = window.Backbone

var Router = Backbone.Model.extend({
    initialize: function() {},

    defaults: {
        routerId: null,
        //Geojson geometry
        polygon: null,
        buildTime: null,
        transitModes: [],
        centerLatitude: null,
        centerLongitude: null,
        hasParkRide: false,
        hasBikePark: false,
        hasBikeSharing: false,
        lowerLeftLongitude: null,
        lowerLeftLatitude: null,
        upperRightLongitude: null,
        upperRightLatitude:null
    }
})

module.exports = Router

