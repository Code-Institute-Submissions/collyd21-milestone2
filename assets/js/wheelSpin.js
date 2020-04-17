screenCheck();

function screenCheck() {
if (window.innerWidth > 440) {
		largeScreen();
	} else {
		smallScreen();
    }
    
}

// Function to call if screen is large
function smallScreen() {
    // Variable to draw the Spinning Wheel
theWheel = new Winwheel({
    'numSegments': 6, // Number of segments.
	'textAlignment': 'centre',
	'textMargin': 0,
	'outerRadius': 280, // Radius of outer circle.
	'pointerAngle': 90, // Degree angle that pointer sits at.
	'innerRadius': 40, // Radius of inner circle.
	'responsive': true,
	'textFontSize': 35,
	'segments': // Individual segment styling.
		[{
				'fillStyle': '#eeefff',
				'text': 'Burger'
			},
			{
				'fillStyle': '#89f26e',
				'text': 'Italian'
			},
			{
				'fillStyle': '#7de6ef',
				'text': 'Thai'
			},
			{
				'fillStyle': '#e7706f',
				'text': 'Chinese'
			},
			{
				'fillStyle': '#eff111',
				'text': 'Indian'
			},
			{
				'fillStyle': '#e77811',
				'text': 'Pizza'
			}
		],
	'pins': // Specify pin parameters.
	{
		'number': 24, // Number of pins.
		'outerRadius': 4, // Radius of each pin.
		'margin': 6, // Margin ofpin from edge of wheel.
		'fillStyle': '#636363', // Fill colour of pin.
		'strokeStyle': '#ffffff' // Border colour of pin.
	},
	'animation': {
		'type': 'spinToStop', // Animation set to spin and then stop.
		'duration': 4, // Animation  time in seconds.
		'spins': 6, // Number of complete revolutions of the wheel.
		'callbackFinished': 'winAnimation()', // After spinning finishes, play winning animation & display map
        'callbackAfter' : 'pointerImage()'
	}
})
};


// Function to call if screen is large
function largeScreen() {
    // Variable to draw the Spinning Wheel
theWheel = new Winwheel({
    'numSegments': 6, // Number of segments.
	'textAlignment': 'centre',
	'textMargin': 0,
	'outerRadius': 300, // Radius of outer circle.
	'pointerAngle': 90, // Degree angle that pointer sits at.
	'innerRadius': 40, // Radius of inner circle.
	'responsive': true,
	'textFontSize': 40,
	'segments': // Individual segment styling.
		[{
				'fillStyle': '#eeefff',
				'text': 'Burger'
			},
			{
				'fillStyle': '#89f26e',
				'text': 'Italian'
			},
			{
				'fillStyle': '#7de6ef',
				'text': 'Thai'
			},
			{
				'fillStyle': '#e7706f',
				'text': 'Chinese'
			},
			{
				'fillStyle': '#eff111',
				'text': 'Indian'
			},
			{
				'fillStyle': '#e77811',
				'text': 'Pizza'
			}
		],
	'pins': // Specify pin parameters.
	{
		'number': 24, // Number of pins.
		'outerRadius': 8, // Radius of each pin.
		'margin': 10, // Margin ofpin from edge of wheel.
		'fillStyle': '#636363', // Fill colour of pin.
		'strokeStyle': '#ffffff' // Border colour of pin.
	},
	'animation': {
		'type': 'spinToStop', // Animation set to spin and then stop.
		'duration': 4, // Animation  time in seconds.
		'spins': 6, // Number of complete revolutions of the wheel.
		'callbackFinished': 'winAnimation()', // After spinning finishes, play winning animation & display map
        'callbackAfter' : 'pointerImage()'
	}
})
};

// Function to draw pointer marker image onto the wheel
function pointerImage(){

let pointerImageSmall = new Image();
let pointerImageLarge = new Image();

// Set onload of the image to anonymous function to draw on the canvas once the image has loaded.
pointerImageSmall.onload = function()
{
    let pointerCanvas = document.getElementById('canvas');
    let ctx = pointerCanvas.getContext('2d');
 
    if (ctx && window.innerWidth < 380) {           // Only draw on screens less than 380px width
        ctx.save();
        ctx.drawImage(pointerImageSmall, 145, 141);   // Draw the image at the specified x and y.
        ctx.restore();
        // var bodyrect = document.body.getBoundingClientRect(),
        // elemrect = canvas.getBoundingClientRect();
        // console.log(bodyrect, elemrect);
        // console.log(elemrect.right - bodyrect.left);
        // console.log(elemrect.left);
    }
    else if (ctx && window.innerWidth > 381 && window.innerWidth < 420){    // Only draw on screens between 381px and 420px width
        ctx.save();
        ctx.drawImage(pointerImageSmall, 162, 160);   // Draw the image at the specified x and y.
        ctx.restore();
    }

    else if (ctx && window.innerWidth > 421){   // Only draw on screens greater than 421px width
        ctx.save();
        ctx.drawImage(pointerImageSmall, 263, 260);   // Draw the image at the specified x and y.
        ctx.restore();
    }
};

// Set source of the images for different size of pointer.
pointerImageSmall.src = 'assets/images/prizepointersmall.png';
pointerImageLarge.src = 'assets/images/prizepointerlarge.png';
}

// Function to activate spininng after button clicked
function spinClick() {
	spinToggle();
	theWheel.startAnimation();
}

// Function to toggle Spin Button on and off
function spinToggle() {
	var spin = document.getElementById("spinButton");
	if (spin.style.visibility === "visible") {
		spin.style.visibility = "hidden";
	} else {
		spin.style.visibility = "visible";
	}
}

// Function to play animation after wheel stops
function winAnimation() {
	winningSegment = theWheel.getIndicatedSegment(); // Get the text of the winning segment.
	var winningSegmentNumber = theWheel.getIndicatedSegmentNumber(); // Get the number of the winning segment.


	for (var i = 1; i < theWheel.segments.length; i++) {
		theWheel.segments[i].fillStyle = 'grey'; // For loop and change fillStyle of all segments to grey.
	}

	theWheel.segments[winningSegmentNumber].fillStyle = 'gold'; // Change winning segment colour.
	theWheel.pins.fillStyle = '#97EFE9';
	theWheel.draw(); // Call draw function to render changes.
	if (winningSegment.text === "Italian") { // If statement to add "food" to end of result.
		winningSegment.text = "Italian food";
	}
	reset(); // Toggle reset button
	mapView(); // Toggle map from view
	mapSearch(); // Search map from winning parameters
	console.log(winningSegment.text); // Console logs the text of winning segment.
	console.log(typeof winningSegment); // Console log type of winning segement

}

// Function to toggle Reset Button on and off.
function reset() {
	var reset = document.getElementById("resetButton");
	if (reset.style.display === "none") {
		reset.style.display = "inline";
	} else {
		reset.style.display = "none";
	}
}

// Function to reset the wheel
function resetWheel() {
	theWheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
	theWheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
	theWheel.segments[1].fillStyle = '#eeefff'; // Reset segements color and text
	theWheel.segments[2].fillStyle = '#89f26e';
	theWheel.segments[2].text = 'Italian';
	theWheel.segments[3].fillStyle = '#7de6ef';
	theWheel.segments[4].fillStyle = '#e7706f';
	theWheel.segments[5].fillStyle = '#eff111';
	theWheel.segments[6].fillStyle = '#e77811';
	theWheel.pins.fillStyle = '#636363';
	theWheel.draw(); // Call draw function to render changes.
	mapView(); // Toggle mapView function to reset map to hidden.
	spinToggle(); // Toggle Spin button to On.
	reset(); // Toggle Reset button to Off.
}