// jshint esversion: 6
var currentPosition;

// Function to get users current location
function setLocation(position) {
	currentPosition = position;
}
window.addEventListener('load', function () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(setLocation); // Call getCurrentPosition
	} else {
		alert("Sorry, your browser does not support geolocation services.");
	}
});

// Function to toggle the map on or off
function mapView() {
	var mapView = document.getElementById("map");
	if (mapView.style.display === "none") {
		mapView.style.display = "block";
	} else {
		mapView.style.display = "none";
	}
}

// Function to loop thorugh results and log place name and information
function callback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < 5; i++) { // Maximum of 5 results
			let place = results[i];
			console.log(place);
			console.log(results[i].name);
			marker = new google.maps.Marker({ // Draws new marker based on results
				position: place.geometry.location,
				map: map,
			});

			// Variable to set infowindow pop up
			var infowindow = new google.maps.InfoWindow();
			google.maps.event.addListener(marker, 'click', (function (_marker, _i) {
				return function () {
					// Info window contents, adds name, address and rating of takeaway
					infowindow.setContent("<b>" + place.name + "</b>" + "<br>" + "<b>Address: </b>" + place.formatted_address + "<br>" + "<b>Rating: </b>" + place.rating);
					infowindow.open(map, this); // individual infowindow for particular marker clicked
				};
			})(marker, i));
		}
	}
}

// Function to search map based on location
function mapSearch() {
	if (currentPosition != null) {
		var userLatLng = new google.maps.LatLng(currentPosition.coords.latitude, currentPosition.coords.longitude); // Define the coordinates

		// Variable for maps options
		var mapOptions = {
			zoom: 12, // Zoomed view setting of map
			center: userLatLng, // Centre map to users coordinates
		};

		map = new google.maps.Map(document.getElementById("map"), mapOptions); // Create the map

		// Variable for parameters to be used in search
		var request = {
			location: userLatLng, // Users coordinates
			radius: '10', // Radius in miles from coordinates
			query: [winningSegment.text] // Text to be searched (winning takeaway text)
		};
		service = new google.maps.places.PlacesService(map);
		service.textSearch(request, callback);
	}
}