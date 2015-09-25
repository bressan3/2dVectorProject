document.write('<script type="text/javascript" src="vector.js"></script>');

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
}

function update(){
	context.canvas.width = context.canvas.width;
	context.transform(1, 0, 0, -1, 250, 250);

	cord1 = vector(document.getElementById("x1").value,document.getElementById("y1").value,document.getElementById("z1").value,document.getElementById("type1").value);
	cord2 = vector(document.getElementById("x2").value,document.getElementById("y2").value,document.getElementById("z2").value,document.getElementById("type2").value);
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

function printMagnitude(){
	update();
	if(isVector(cord1))
		result.innerHTML = "Magnitude: "+getMagnitude(cord1).toFixed(2);
	else result.innerHTML = "V1 is not a vector.";
}

function printDirection(){
	update();
	if(isVector(cord1) && getCordinates(cord1,'x') == 0 && getCordinates(cord1,'y') == 0){
		result.innerHTML = "Can't get a (0,0) vector's direction.";
	}
	else if(isVector(cord1))
		result.innerHTML = "Direction: "+getDirection(cord1).toFixed(2)+"˚";
	else result.innerHTML = "V1 is not a vector.";
}

function printScalarMult(){
	update();
	if(isVector(cord1)){
		var scalar = document.getElementById("scalar").value;
		var finalVect = scalarMultiplication(cord1, scalar);
		result.innerHTML = scalar+" x V1 = ("+getCordinates(finalVect,'x')+","+getCordinates(finalVect,'y')+","+getCordinates(finalVect,'z')+")";
	} else result.innerHTML = "V1 is not a vector.";
}

function printVecAddition(){
	update();
	if(isVector(cord1) && isVector(cord2)){
		var finalVect = vectorAddition(cord1, cord2);
		result.innerHTML = "V1 + V2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
	} else result.innerHTML = "Invalid operation. Both V1 and V2 must be vectors.";
}

function printVecSubtraction(){
	update();
	if(isVector(cord1) && isVector(cord2)){
		var finalVect = vectorSubtraction(cord1, cord2);
		result.innerHTML = "V1 - V2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
	} else result.innerHTML = "Invalid operation. Both V1 and V2 must be vectors.";
}

function printPointVecAdd(){
	update();
	if(isVector(cord1) && isVector(cord2) || isPoint(cord1) && isPoint(cord2))
		result.innerHTML = "Invalid operation. Please type a point and vector to continue.";
	else{
		var finalPt = pointVecAdd(cord1, cord2);
		result.innerHTML = "V + P = ("+finalPt[0]+","+finalPt[1]+","+finalPt[2]+")";
	}
}

function printPtSubtraction(){
	update();
	if(isPoint(cord1) && isPoint(cord2) == 1){
		var finalVect = pointSubtraction(cord1, cord2);
		result.innerHTML = "P1 - P2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
	} else result.innerHTML = "Invalid operation. Please insert two points.";
}

function printCrossProduct(){
	update();
	if(isVector(cord1) && isVector(cord2)){
		var finalVect = crossProduct(cord1, cord2);
		result.innerHTML = "V1 x V2 = ("+finalVect[0]+","+finalVect[1]+","+finalVect[2]+")";
	} else result.innerHTML = "Invalid operation. Please insert two vectors to continue.";
}

function printDotProduct(){
	update();
	result.innerHTML = "V1/P1 . V2/P2 = "+(dotProduct(cord1, cord2));
}

function printNormalizeVect(){
	update();
	if(isVector(cord1) && getMagnitude(cord1) != 0){
		var finalVect = normalizeVect(cord1, cord2);
		result.innerHTML = "V1(n) = ("+finalVect[0].toFixed(2)+","+finalVect[1].toFixed(2)+","+finalVect[2].toFixed(2)+")";
	} else result.innerHTML = "Invalid operation. V1 is not a vector.";
}

function printAffineSum(){
	update();
	if(isVector(cord1) && isVector(cord2)){
		var finalVect = affineSum(cord1, document.getElementById("affineSum").value);
		result.innerHTML = "Affine Sum = ("+finalVect[0].toFixed(2)+","+finalVect[1].toFixed(2)+","+finalVect[2].toFixed(2)+")";
	} else result.innerHTML = "Invalid operation. Please insert two vectors to continue";
}



