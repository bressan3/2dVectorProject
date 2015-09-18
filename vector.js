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

function drawVector(x, y, z){
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(x, y, z);
	context.stroke();
	context.closePath();
}

function drawPoint(x, y){
	context.beginPath();
	context.fillRect(x,y,5,5);
	context.closePath();
}

function getMagnitude(){
	vector();
	result.innerHTML = "Magnitude: "+Math.sqrt(Math.pow(cord1[0],2)+Math.pow(cord1[1],2)+Math.pow(cord1[2],2));
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
	if(vector)
}
