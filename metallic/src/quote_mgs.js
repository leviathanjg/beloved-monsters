var smart = [
	"he'd be sliced up faster than an onion on an infomercial.",
	"do you think love can bloom, even on a battlefield?",
	"this is just like one of my japanese animes!",
	"i love to reload during a battle."
	];

function intel() {
	var rand=Math.floor(Math.random()*smart.length);
	document.getElementById('quo').innerHTML=smart[rand];}

onload = function() {
	intel(); }