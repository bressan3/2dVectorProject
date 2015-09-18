var canvas, context;
var result;
var vector1;
var vector2;

window.onload = function init () {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	result = document.getElementById("result");
}

function addVector(){
	vector1 = [document.getElementById("x1").value,
		document.getElementById("y1").value,
		document.getElementById("z1").value,
		document.getElementById("type1").value
	];

	vector2 = [document.getElementById("x2").value,
		document.getElementById("y2").value,
		document.getElementById("z2").value,
		document.getElementById("type2").value
	];

	drawVector();
}

function drawVector(){
	context.moveTo(0,0);
	context.lineTo(vector1[0], vector1[1], vector1[2]);
	context.stroke();
}

function getMagnitude(){
	vector()
	result.innerHTML = Math.sqrt(Math.pow(vector1[0],2)+Math.pow(vector1[1],2)+Math.pow(vector1[2],2));
}

