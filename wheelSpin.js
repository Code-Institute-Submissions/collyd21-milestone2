function spinClick(){
spinToggle();
theWheel.startAnimation();
}

function spinToggle(){                                                        // Spin Button toggle on and off.
  var spin = document.getElementById("spinButton");
  if (spin.style.display === "inline") {
    spin.style.display = "none";
  } else {
    spin.style.display = "inline";
  }
}    

    function winAnimation()
        {
            winningSegment = theWheel.getIndicatedSegment();                // Get the text of the winning segment.
            var winningSegmentNumber = theWheel.getIndicatedSegmentNumber();    // Get the number of the winning segment.
 
            for (let i = 1; i < theWheel.segments.length; i ++) 
            {
                theWheel.segments[i].fillStyle = 'grey';                     // For loop and change fillStyle of all segments to grey.
            }

            theWheel.segments[winningSegmentNumber].fillStyle = 'gold';     // Change winning segment colour.
            theWheel.pins.fillStyle   = '#97EFE9';
            theWheel.draw();                                                // Call draw function to render changes.
            reset();
            mapView();
            mapSearch();
            console.log(winningSegment.text);                           // Console logs the text of winning segment.
            console.log(typeof winningSegment);
           
        }




//             function initGeolocation() {
//                 var request = {
//     location: userLatLng,
//     radius: '50',
//     query: 'restaurant'
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }
//                 if (navigator.geolocation) {
//                     navigator.geolocation.getCurrentPosition(success);                // Call getCurrentPosition
//                 } else {
//                     alert("Sorry, your browser does not support geolocation services.");
//                 }
            
//             var map;
//             var service;
// var infowindow;
// var request;
// var markers = [];

//             function success(position) {
//                 var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // Define the coordinates

//                 var mapOptions = {
//                     zoom: 13,
//                     center: userLatLng,
//                 };

//                 map = new google.maps.Map(document.getElementById("map"), mapOptions);  // Create the map

//                 var marker = new google.maps.Marker({                               // Place the initial marker
//                     position: userLatLng,
//                     map: map,
//                     title: "Your current location!"
//                 });
//                 var marker = new google.maps.Marker({                               // Place the initial marker
//                     position: {lat: 53.506170, lng: -6.456338},
//                     map: map,
//                     title: "coordinates 2!"
//                 });
//             }

function reset() {                                                        // Reset Button toggle on and off.
  var reset = document.getElementById("resetButton");
  if (reset.style.display === "none") {
    reset.style.display = "inline";
  } else {
    reset.style.display = "none";
  }
}
 
 
        function resetWheel()
        {
            theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
            theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
            theWheel.segments[1].fillStyle = '#eeefff';
            theWheel.segments[2].fillStyle = '#89f26e';
            theWheel.segments[3].fillStyle = '#7de6ef';
            theWheel.segments[4].fillStyle = '#e7706f';
            theWheel.segments[5].fillStyle = '#eff111';
            theWheel.segments[6].fillStyle = '#e77811';       
            theWheel.pins.fillStyle   = '#636363';
            theWheel.draw();                // Call draw function to render changes.
            mapView();                      // Toggle mapView function to reset map to hidden.
            spinToggle();                    // Toggle Spin button to On.
            reset();                        // Toggle Reset button to Off.
            };
        