function mapView() {                                                        // Map in view toggle on and off.
  var mapView = document.getElementById("map");
  if (mapView.style.display === "none") {
    mapView.style.display = "block";
  } else {
    mapView.style.display = "none";
  }
}

function mapSearch(){
if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(success);                // Call getCurrentPosition
                } else {
                    alert("Sorry, your browser does not support geolocation services.");
                }

function success(position) {
                var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // Define the coordinates

                var mapOptions = {
                    zoom: 15,
                    center: userLatLng,
                };

                map = new google.maps.Map(document.getElementById("map"), mapOptions);  // Create the map

                var request = {
    location: userLatLng,
    radius: '10',
    query: [winningSegment.text]
  }; 

    service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < 5; i++) {
    let place = results[i];
      console.log(place);
      console.log(results[i].name);
     marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
    });
    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(marker, 'click', (function(_marker, _i) {
     return function() {
  infowindow.setContent("<b>" + place.name + "</b>" + "<br>" + "<b>Address: </b>" + place.formatted_address + "<br>" + "<b>Rating: </b>" + place.rating);
  infowindow.open(map, this);}
})(marker, i));
    }
}
}
}
