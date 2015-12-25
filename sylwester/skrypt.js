function countdown() {
	var time = Date.parse(new Date(2015, 11, 31, 20, 0, 0, 0)) - Date.parse(new Date());
	
	var days = Math.floor( time / (1000*60*60*24) );
	var hours = Math.floor( (time / (1000*60*60)) % 24 );
	var minutes = Math.floor( (time / (1000*60)) % 60 );
	var seconds = Math.floor( (time / 1000) % 60 );
	
	document.getElementById('days').innerHTML = days;
	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;
	
	setTimeout("countdown()", 1000);
}