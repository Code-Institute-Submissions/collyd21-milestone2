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
                    zoom: 13,
                    center: userLatLng,
                };

                map = new google.maps.Map(document.getElementById("map"), mapOptions);  // Create the map

                var marker = new google.maps.Marker({                               // Place the initial marker
                    position: userLatLng,
                    map: map,
                    title: "Your current location!"
                });
                var request = {
    location: userLatLng,
    radius: '50',
    query: [winningSegment.text]
  };

    service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
};

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < 3; i++) {
      var place = results[i];
      console.log(place);
      addMarker(place.geometry.location);
    }
  }
}

function addMarker(position) {

    new google.maps.Marker({
        position: position,
        map: map
    });

 }
};