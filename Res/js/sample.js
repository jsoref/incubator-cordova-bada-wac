
/*
 * Acceleration
 */
var accelWatchID = null;

function getCurrentAcceleration() {
	var successCallback = function(acceleration) {
		var accelEm = document.getElementById("acceleration");
		accelEm.innerHTML = "X: "+acceleration.x + " Y: " + acceleration.y + " Z: " + acceleration.z;
	};
	
	var errorCallback = function(error) {
		console.log(error);
		document.getElementById("acceleration").innerHTML = "ERROR";
	};
	navigator.accelerometer.getCurrentAcceleration(successCallback, errorCallback, null);
}

function toggleAcceleration() {
	var accelBtn = document.getElementById("accelBtn");
	if(accelBtn.innerHTML == "watchAcceleration") {
		watchAcceleration();
		accelBtn.innerHTML = "clearWatch";
	} else {
		clearAccelerationWatch();
		accelBtn.innerHTML = "watchAcceleration";
	}
}

function watchAcceleration() {
	var successCallback = function(acceleration) {
		console.log("watchAcceleration::successCallback");
		var accelEm = document.getElementById("acceleration");
		accelEm.innerHTML = "X: "+acceleration.x + " Y: " + acceleration.y + " Z: " + acceleration.z;
	};
	
	var errorCallback = function(error) {
		console.log(JSON.stringify(error));
		document.getElementById("acceleration").innerHTML = "ERROR";
	};
	accelWatchID = navigator.accelerometer.watchAcceleration(successCallback, errorCallback, null);
	console.log("watchAcceleration "+accelWatchID);
}
function clearAccelerationWatch() {
	if(accelWatchID != null) {
		navigator.accelerometer.clearWatch(accelWatchID);
		accelWatchID = null;
		document.getElementById("acceleration").innerHTML = "";
		console.log("clearAccelerationWatch");
	}
}

/*
 * Geolocation
 */

var geoWatchID = null;

function getCurrentPosition() {
	var successCallback = function(geolocation) {
		var geoEm = document.getElementById("geolocation");
		geoEm.innerHTML = "Latitude: "+geolocation.coords.latitude + " Longitude: " + geolocation.coords.longitude;
	};
	
	var errorCallback = function(error) {
		console.log(error);
		var geoEm = document.getElementById("geolocation");
		geoEm.innerHTML = "ERROR";
	};
	navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

function togglePosition() {
	var geoBtn = document.getElementById("geoBtn");
	if(geoBtn.innerHTML == "watchPosition") {
		watchPosition();
		geoBtn.innerHTML = "clearWatch";
	} else {
		clearPositionWatch();
		geoBtn.innerHTML = "watchPosition";
	}
}

function watchPosition() {
	var successCallback = function(geolocation) {
		console.log("watchPosition::successCallback");
		var geoEm = document.getElementById("geolocation");
		geoEm.innerHTML = "latitude: "+geolocation.coords.latitude + " longitude: " + geolocation.coords.longitude;
	};
	
	var errorCallback = function(error) {
		console.log(error);
		var geoEm = document.getElementById("geolocation");
		geoEm.innerHTML = "ERROR";
	};
	geoWatchID = navigator.geolocation.watchPosition(successCallback, errorCallback);
	console.log("watchPosition "+geoWatchID);
}
function clearPositionWatch() {
	if(geoWatchID != null) {
		navigator.geolocation.clearWatch(geoWatchID);
		geoWatchID = null;
		document.getElementById("geolocation").innerHTML = "";
		console.log("clearPositionWatch");
	}
}

/*
 * Compass
 */

var compassWatchID = null;

function getCurrentHeading() {
	var successCallback = function(heading) {
		var headingEm = document.getElementById("heading");
		headingEm.innerHTML = "magnetic Heading: "+ heading.magneticHeading + 
		                      " true Heading: " + heading.trueHeading +
		                      " heading accuracy: " + heading.headingAccuracy +
		                      " heading timestamp " + heading.timestamp;
	};
	
	var errorCallback = function(error) {
		console.log(error);
		var headingEm = document.getElementById("heading");
		headingEm.innerHTML = "ERROR";
	};
	navigator.compass.getCurrentHeading(successCallback, errorCallback);
}

function toggleCompass() {
	var geoBtn = document.getElementById("compassBtn");
	if(geoBtn.innerHTML == "watchHeading") {
		watchHeading();
		compassBtn.innerHTML = "clearWatch";
	} else {
		clearHeadingWatch();
		compassBtn.innerHTML = "watchHeading";
	}
}

function watchHeading() {
	var successCallback = function(heading) {
		console.log("watchHeading::successCallback");
		var headingEm = document.getElementById("heading");
		headingEm.innerHTML = "magnetic Heading: "+ heading.magneticHeading + 
		" true Heading: " + heading.trueHeading +
		" heading accuracy: " + heading.headingAccuracy +
		" heading timestamp " + heading.timestamp;
	};
	
	var errorCallback = function(error) {
		console.log(error);
		var headingEm = document.getElementById("heading");
		headingEm.innerHTML = "ERROR";
	};
	compassWatchID = navigator.compass.watchHeading(successCallback, errorCallback);
	console.log("watchHeading "+compassWatchID);
}
function clearHeadingWatch() {
	if(compassWatchID != null) {
		navigator.compass.clearWatch(compassWatchID);
		compassWatchID = null;
		document.getElementById("heading").innerHTML = "";
		console.log("clearHeadingWatch");
	}
}