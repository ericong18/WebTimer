console.log("I'm running");


var userHours = 0;
var userMinutes = 0;

// <<<<<<< HEAD
// let userTimer = setInterval(alertUser, 5000);

// function alertUser() {
// swal({
//   title: 'Hey there!',
//   text: "You have been on " + window.location.href + " for at least 10 minutes",
//   type: 'warning',
//   showCancelButton: false,
//   confirmButtonColor: '#3085d6',
//   confirmButtonText: "I don't need a break!"
// }).then((result) => {
  
//     window.location.replace("http://m.memegen.com/gy6mmd.jpg");
  
// })
// 	// alert("You have been on " + siteURL + " for at least 10 minutes");
// 	//window.location.replace("http://m.memegen.com/gy6mmd.jpg");
// =======

var userTimer;

chrome.storage.local.get(['savedDefaultHours', 'savedDefaultMinutes'], function(result) {
	if (result.savedDefaultHours == 0 && result.savedDefaultMinutes == 0){
		userHours = 0;
		userMinutes = .1;
	}
	if (result.savedDefaultHours == ""){
		userHours = 0;
	}
	else{
		userHours = result.savedDefaultHours;
	}
	if (result.savedDefaultMinutes == ""){
		userMinutes = 0;
	}
	else{
		userMinutes = result.savedDefaultMinutes;
	}

	//alert(userHours + " hours and " + userMinutes + " minutes");

	let time = convertTime(userHours, userMinutes);
	// alert(time);
	userTimer = setTimeout(alertUserCustom(userHours, userMinutes), time);

})

function alertUserDefault() {
	alert("You have been on " + window.location.href + " for at least 10 minutes");
	window.location.replace("http://m.memegen.com/gy6mmd.jpg");
}

function alertUserCustom(userHours, userMinutes) {
	alert("You have been on " + window.location.href + " for at least " + userHours + " hour(s) and " + userMinutes + " minutes(s)");
	window.location.replace("http://m.memegen.com/gy6mmd.jpg");
}

function convertTime(hours, minutes) {
	let total = ((hours * 60) + minutes) * 60000;
	return total;
}