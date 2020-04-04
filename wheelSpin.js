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
 
            for (var i = 1; i < theWheel.segments.length; i ++) 
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
            }
        