var canvas, context;
var result;
var cord1;
var cord2;

window.onload = function init () {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	//changes canvas origin to the middle
	context.transform(1, 0, 0, -1, 250, 250);
	result = document.getElementById("result");

	drawVector(0,0,0);
	context.clearRect(0,0,500,500);
}

function vector(){
	//clears the canvas and reset the origin to the middle
	context.canvas.width = context.canvas.width;
	context.transform(1, 0, 0, -1, 250, 250);

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

function getCordinates(vecpoint, cordinate){
	if(cordinate == 'x') return vecpoint[0];
	else if (cordinate == 'y') return vecpoint[1];
	else if (cordinate == 'z') return vecpoint[2];
}

function isVector(v1){
	return (v1[3] == 0);
}

function isPoint(p1){
	return (p1[3] == 1);
}

function drawVector(v1, color){
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(getCordinates(v1,'x'), getCordinates(v1,'y'));
	if(color == undefined) color = '#000000';
	context.strokeStyle = color;
	context.stroke();
	context.closePath();
}

function drawPoint(p1){
	context.beginPath();
	context.fillRect(getCordinates(p1, 'x'),getCordinates(p1, 'y'),5,5);
	context.closePath();
}

function getMagnitude(v1){
	vector();
	return Math.sqrt(Math.pow(getCordinates(v1,'x'),2)+Math.pow(getCordinates(v1,'y'),2)+Math.pow(getCordinates(v1,'z'),2));
}

function printMagnitude(){
	result.innerHTML = "Magnitude: "+getMagnitude(cord1);
}

function getDirection(){
	vector();
	var angle = (Math.atan(+getCordinates(cord1,'y')/+getCordinates(cord1,'x')) * (180/Math.PI));
	if(angle < 0) angle = -1*angle;
	if(getCordinates(cord1,'x') > 0 && getCordinates(cord1,'y') > 0)
		result.innerHTML = "Direction: "+angle.toFixed(2)+"°";
	if(getCordinates(cord1,'x') < 0 && getCordinates(cord1,'y') > 0)
		result.innerHTML = "Direction: "+(180 - +angle).toFixed(2)+"°";
	if(getCordinates(cord1,'x') < 0 && getCordinates(cord1,'y') < 0)
		result.innerHTML = "Direction: "+(180 + +angle).toFixed(2)+"°";
	if(getCordinates(cord1,'x') > 0 && getCordinates(cord1,'y') < 0)
		result.innerHTML = "Direction: "+(360 - +angle).toFixed(2)+"°";
}

function scalarMultiplication(){
	vector();
	var scalar = document.getElementById("scalar").value;
	var finalVect = [
		scalar*getCordinates(cord1,'x'),
		scalar*getCordinates(cord1,'y'),
		scalar*getCordinates(cord1,'z')
	];

	drawVector(finalVect, '#ff0000');
	result.innerHTML = scalar+" x V1 = ("+getCordinates(finalVect,'x')+","+getCordinates(finalVect,'y')+","+getCordinates(finalVect,'z')+")";
}

function vectorAddition(){
	vector();
	var finalVect = [
		+getCordinates(cord1,'x') + +getCordinates(cord2,'x'),
		+getCordinates(cord1,'y') + +getCordinates(cord2,'y'),
		+getCordinates(cord1,'z') + +getCordinates(cord2,'z')
	];

	drawVector(cord1);
	drawVector(cord2);
	drawVector(finalVect, '#ff0000');
	result.innerHTML = "V1 + V2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
}

function vectorSubtraction(){
	vector();
	var finalVect = [
		+getCordinates(cord1,'x') - +getCordinates(cord2,'x'),
		+getCordinates(cord1,'y') - +getCordinates(cord2,'y'),
		+getCordinates(cord1,'z') - +getCordinates(cord2,'z')
	];

	drawVector(cord1);
	drawVector(cord2);
	drawVector(finalVect, '#ff0000');
	result.innerHTML = "V1 - V2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
}

function pointVecAdd(){
	vector();
	if(isVector(cord1) && isVector(cord2) || isPoint(cord1) && isPoint(cord2))
		result.innerHTML = "Invalid operation. Please type a point and vector to continue.";
	else{
		var finalPt = [
			+getCordinates(cord1,'x') + +getCordinates(cord2,'x'),
			+getCordinates(cord1,'y') + +getCordinates(cord2,'y'),
			+getCordinates(cord1,'z') + +getCordinates(cord2,'z')
		];

		drawPoint(finalPt);
		result.innerHTML = "V + P = ("+finalPt[0]+","+finalPt[1]+","+finalPt[2]+")";
	}
}

function pointSubtraction(){
	vector();
	if(isPoint(cord1) && isPoint(cord2) == 1){
		var finalVect = [
			+getCordinates(cord1,'x') - +getCordinates(cord2,'x'),
			+getCordinates(cord1,'y') - +getCordinates(cord2,'y'),
			+getCordinates(cord1,'z') - +getCordinates(cord2,'z')
		];

		drawPoint(cord1);
		drawPoint(cord2);
		drawVector(finalVect, '#ff0000');
		result.innerHTML = "P1 - P2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
	} else result.innerHTML = "Invalid operation. Please insert two points.";
}

function crossProduct(){
	vector();
	//V1 x V2 = {y1 z2 - z1 y2; z1 x2 - x1 z2; x1 y2 - y1 x2}
	if(isVector(cord1) && isVector(cord2)){
		var finalVect = [
			(+getCordinates(cord1,'x') * +getCordinates(cord2,'z')) - (+getCordinates(cord1,'z') * +getCordinates(cord2,'y')),
			(+getCordinates(cord1,'z') * +getCordinates(cord2,'x')) - (+getCordinates(cord1,'x') * +getCordinates(cord2,'z')),
			(+getCordinates(cord1,'x') * +getCordinates(cord2,'y')) - (+getCordinates(cord1,'y') * +getCordinates(cord2,'x'))
		];

		result.innerHTML = "V1 x V2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
	} else result.innerHTML = "Invalid operation. Please insert two vectors to continue.";
}

function dotProduct(){
	vector();
	result.innerHTML = "V1/P1 . V2/P2 = "+((+getCordinates(cord1,'x')* +getCordinates(cord2,'x')) + (+getCordinates(cord1,'y')* +getCordinates(cord2,'y')) + (+getCordinates(cord1,'z')* +getCordinates(cord2,'z')));
}

function normalizeVect(){
	vector();
	if(isVector(cord1)){
		var finalVect = [
			+getCordinates(cord1,'x')/+getMagnitude(cord1),
			+getCordinates(cord1,'y')/+getMagnitude(cord1),
			+getCordinates(cord1,'z')/+getMagnitude(cord1)
		];

		drawVector(finalVect, '#ff0000');
		result.innerHTML = "V1(n) = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
	} else result.innerHTML = "Invalid operation. V1 is not a vector.";

}

function affineSum(){
	vector();
	if(isVector(cord1) && isVector(cord2)){
		var s = document.getElementById("affineSum").value;
		//(1-s)*v1+s*v2
		var finalVect = [
			((1- +s) * +getCordinates(cord1,'x')) + (+s * +getCordinates(cord2,'x')),
			((1- +s) * +getCordinates(cord1,'y')) + (+s * +getCordinates(cord2,'y')),
			((1- +s) * +getCordinates(cord1,'z')) + (+s * +getCordinates(cord2,'z')),
		];

		drawVector(finalVect, '#ff0000');
		result.innerHTML = "Affine Sum = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";

	} else result.innerHTML = "Invalid operation. Please insert two vectors to continue";
}

