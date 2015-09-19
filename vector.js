var canvas, context;
var result;
var cord1;
var cord2;

window.onload = function init () {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	//changes canvas origin to the middle
	context.transform(-1, 0, 0, 1, 250, 250);
	result = document.getElementById("result");
}

function vector(){
	cord1 = [document.getElementById("x1").value,
		document.getElementById("y1").value,
		document.getElementById("z1").value,
		document.getElementById("type1").value
	];

	cord2 = [document.getElementById("x2").value,
		document.getElementById("y2").value,
		document.getElementById("z2").value,
		document.getElementById("type2").value
	];
}

function drawVector(x, y, z, color){
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(x, y, z);
	if(color == undefined) color = '#000000';
	context.strokeStyle = color;
	context.stroke();
	context.closePath();
}

function drawPoint(x, y){
	context.beginPath();
	context.fillRect(x,y,5,5);
	context.closePath();
}

function getMagnitude(v1){
	vector();
	return +Math.sqrt(Math.pow(cord1[0],2)+Math.pow(cord1[1],2)+Math.pow(cord1[2],2));
}

function printMagnitude(){
	restult.innerHTML = "Magnitude: "+getMagnitude();
}

function scalarMultiplication(){
	vector();
	var scalar = document.getElementById("scalar").value;
	context.clearRect(0,0,500,500);
	drawVector(scalar*cord1[0], scalar*cord1[1], scalar*cord1[2]);
	result.innerHTML = scalar+" x V1 = ("+scalar*cord1[0]+","+scalar*cord1[1]+","+scalar*cord1[2]+")";
}

function vectorAddition(){
	vector();
	var finalVect = [
		+cord1[0] + +cord2[0],
		+cord1[1] + +cord2[1],
		+cord1[2] + +cord2[2]
	];

	context.clearRect(0,0,500,500);
	drawVector(cord1[0], cord1[1], cord1[2]);
	drawVector(cord2[0], cord2[1], cord2[2]);
	drawVector(finalVect[0], finalVect[1], finalVect[2]);
	result.innerHTML = "V1 + V2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
}

function vectorSubtraction(){
	vector();
	var finalVect = [
		+cord1[0] - +cord2[0],
		+cord1[1] - +cord2[1],
		+cord1[2] - +cord2[2],
	];

	context.clearRect(0,0,500,500);
	drawVector(cord1[0], cord1[1], cord1[2]);
	drawVector(cord2[0], cord2[1], cord2[2]);
	drawVector(finalVect[0], finalVect[1], finalVect[2]);
	result.innerHTML = "V1 - V2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
}

function pointVecAdd(){
	vector();

	if(cord1[3] == 0 && cord2[3] == 0 || cord1[3] == 1 && cord2[3] == 1)
		result.innerHTML = "Invalid operation. Please type a point and vector to continue.";
	else{
		var finalPt = [
			+cord1[0] + +cord2[0],
			+cord1[1] + +cord2[1],
			+cord1[2] + +cord2[2],
		];
		result.innerHTML = "V + P = ("+finalPt[0]+","+finalPt[1]+","+finalPt[2]+")";
		context.clearRect(0,0,500,500);
		drawPoint(finalPt[0],finalPt[1]);
	}
}

function pointSubtraction(){
	vector();

	if(cord1[3] == 1 && cord2[3] == 1){
		var finalVect = [
			+cord1[0] - +cord2[0],
			+cord1[1] - +cord2[1],
			+cord1[2] - +cord2[2],
		];

		context.clearRect(0,0,500,500);
		drawPoint(cord1[0], cord1[1]);
		drawPoint(cord2[0], cord2[1]);
		drawVector(finalVect[0], finalVect[1], finalVect[2], '#ff0000');
		result.innerHTML = "P1 - P2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
	} else result.innerHTML = "Invalid operation. Please insert two points.";
}

function crossProduct(){
	vector();

	//V1 x V2 = {y1 z2 - z1 y2; z1 x2 - x1 z2; x1 y2 - y1 x2}
	if(cord1[3] == 0 && cord2[3] == 0){
		var finalVect = [
			(+cord1[1] * +cord2[2]) - (+cord1[2] * +cord2[1]),
			(+cord1[2] * +cord2[0]) - (+cord1[0] * +cord2[2]),
			(+cord1[0] * +cord2[1]) - (+cord1[1] * +cord2[0])
		];

		result.innerHTML = "V1 x V2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
	} else result.innerHTML = "Invalid operation. Please insert two vectors to continue.";
}

function dotProduct(){
	vector();
	result.innerHTML = "V1/P1 . V2/P2 = ("+cord1[0]*cord2[0]+","+cord1[1]*cord2[1]+","+cord1[2]*cord2[2]+")";
}

function normalizeVect(){
	vector();

	if(cord1[3] == 0){
		var finalVect = [
			+cord1[0]/+getMagnitude(),
			+cord1[1]/+getMagnitude(),
			+cord1[2]/+getMagnitude()
		];

		context.clearRect(0,0,500,500);
		drawVector(finalVect[0], finalVect[1], finalVect[2], '#ff0000');
		result.innerHTML = "V1(n) = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
	} else result.innerHTML = "Invalid operation. V1 is not a vector.";

}

