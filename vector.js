var canvas, context;
var vector1, vector2;

window.onload = function init () {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	context.moveTo(0,0);
	context.lineTo(100,25);
	context.stroke();
}



