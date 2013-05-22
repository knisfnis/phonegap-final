var GeoView = function() {

  this.initialize = function() {
    this.el = $('<div/>');
  };

  this.initialize();

  this.render = function() {
    this.el.html(GeoView.template());
    window.onload = function() {
          var map = new GoogleMap();
          map.initialize();}
    return this;
  }
}

GeoView.template = Handlebars.compile($("#geo").html());

