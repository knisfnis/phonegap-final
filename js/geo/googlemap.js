var globalMap;

function GoogleMap(){

  this.initialize = function(){
    globalMap = showMap();
  }

  var showMap = function(){
    var mapOptions = {
      zoom: 9,
      center: new google.maps.LatLng(59.5, 11),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    return map;
  }
}

var addMarkersToMap = function(map, lat, lng){
  var latitudeAndLongitudeOne = new google.maps.LatLng(lat,lng);
  var markerOne = new google.maps.Marker({
    position: latitudeAndLongitudeOne,
    map: map
  });
}

function addTheseCoordinatesToMap() {
	var map = globalMap;
	var lat = document.getElementById("lat").value;
	var lng = document.getElementById("lng").value;
	addMarkersToMap(map, lat, lng);
}

function addMyCoordinatesToMap() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(p) {
			var lat = 'Latitude: '+p.coords.latitude;
			var lng = 'Longitude: '+p.coords.longitude;
			document.getElementById("jsFyllerMedTekst").innerHTML = "" + lat + lng;
			var map = globalMap;
			addMarkersToMap(map, p.coords.latitude, p.coords.longitude);

		}, function(error){
			document.getElementById("jsFyllerMedTekst").innerHTML = "Fikk ikke tak i lokasjonen din.";
		},{enableHighAccuracy: true}, {timeout:10000});
	} else {
		document.getElementById("jsFyllerMedTekst").innerHTML = "Fikk ikke GPS'en din til å virke.";
	}
}
