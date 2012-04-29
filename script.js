$( '#scanPage' ).live( 'pageinit',function(event){
	var rotator = document.getElementById("scanImg1"); // change to match image ID
	var imageDir = 'img/scan/';						   // change to match images folder
	var delayInSeconds = 5;                            // set number of seconds delay
	// list image names
	var images = ["scan1.png", "scan2.png", "scan3.png"];
    
	// don't change below this line
	var num = 0;
    
	var currImg = 0;
	
	var changeImage = function() {
		
		if (num < 3) {
	    	var len = images.length;
        	rotator.src = imageDir + images[num++];
			currImg++;
        }
		else {
			window.location = "loanConfirm.html"
		}

    };
	setInterval(changeImage, delayInSeconds * 150);
});


$( '#locationPage' ).live( 'pageinit',function(event){
	$("#locate").click(function() {
	  	navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
	});
    
	navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
    
	function foundLocation(position) {
	  	var lat = position.coords.latitude;
	  	var lon = position.coords.longitude;
	  	var userLocation = lat + ',' + lon;
	}
	function noLocation() {
	  	$("#error").watermark("Could not find location");
	  	document.getElementById("error").innerHtml = "Could not find location";
	}
})//end DocReady

