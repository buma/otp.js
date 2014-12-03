var Handlebars = require('handlebars');
var MapViews = require('./map_views');
var NarrativeViews = require('./narrative_views');
var TopoViews = require('./topo_views');

var PlanResponseView = module.exports = Backbone.View.extend({

  initialize: function(options) {
    this.options = options || {};
    if (typeof this.options.autoResize == 'undefined') this.options.autoResize = true;

    this.render();
  },

  render: function() {

    if (this.options.narrative) {
      this.narrativeView = new NarrativeViews.PlanResponseNarrativeView({
        el: this.options.narrative,
        model: this.model,
        autoResize: this.options.autoResize,
        metric: this.options.metric,
        showFullDuration: this.options.showFullDuration
      });
      this.narrativeView.render();
    }

    if (this.model) {
      this.model.getTimeOffset();
      var itins = this.model.get('itineraries');

      if (_.size(itins) > 0) {
        _.each(itins.models, this.processItinerary, this);

        itins.at(0).trigger('activate');
      }
    }
  },

  processItinerary: function(itin, index) {
    if (this.options.map) {
      var mapViewOptions = {
        map: this.options.map,
        model: itin,
        planView: this,
        metric: this.options.metric
      };
      if (this.options.legColor) mapViewOptions.legColor = this.options.legColor;
      var itinMapView = new MapViews.ItineraryMapView(mapViewOptions);
    }

    if (this.options.topo) {
      var itinTopoView = new TopoViews.ItineraryTopoView({
        map: this.options.map,
        el: this.options.topo,
        model: itin,
        planView: this
      });
    }
  },

  newResponse: function(response) {
    this.deactivateOldItinerary();
    this.model = response;
    this.render();
  },

  deactivateOldItinerary: function() {
    // fire a deactivate event on the old active itin, if needed
    if (this.model && this.model.get('itineraries') && this.model.get('itineraries').activeItinerary) {
      this.model.get('itineraries').activeItinerary.trigger('deactivate');
    }
  }
});