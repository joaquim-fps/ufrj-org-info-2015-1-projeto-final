var map;
var directionsDisplay;
var directionsService;
var markerArray = [];

function initialize() {
  // Instantiate a directions service.
  directionsService = new google.maps.DirectionsService();

  // Create a map and center it on Rio de Janeiro.
  var rioDeJaneiro = new google.maps.LatLng(-22.8820913, -43.238735);

  var mapOptions = {
    zoom: 12,
    center: rioDeJaneiro
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Create a renderer for directions and bind it to the map.
  var rendererOptions = {
    map: map,
    draggable: true
  };

  directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

  // Create a listener for updating the map when directions change through dragging the markers on the map
  google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
  	//updates the inputs with the new locations
  	document.getElementById('origem').value = directionsDisplay.getDirections().routes[0].legs[0].start_address;
    document.getElementById('destino').value = directionsDisplay.getDirections().routes[0].legs[0].end_address;

    //calculates the new distance and price
    calcTarifa(directionsDisplay.getDirections().routes[0].legs[0].distance.text);
  });
}

initialize();