import "./style.css"

// Time chaneg stuff
var t = setInterval(update, 1000)
function update(){

	let a = new Date().toLocaleTimeString();
	document.getElementById('time').innerHTML = `I am a developer with no life<br>Btw its ${a}`;
}

// Profuile button
document.getElementById('to_profile').onclick = function() {
	window.location.href = "https://www.facebook.com/jhnmchldlsrs?mibextid=ZbWKwL";
};
