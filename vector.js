/**
*
**/

function vector(x,y,z,type){
	if(x == undefined) x = 0;
	if(y == undefined) y = 0;
	if(z == undefined) z = 0;
	if(type == undefined) type = 0;

	var vector = [x,y,z,type];
	return vector;
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

function getMagnitude(v1){
	return Math.sqrt(Math.pow(getCordinates(v1,'x'),2)+Math.pow(getCordinates(v1,'y'),2)+Math.pow(getCordinates(v1,'z'),2));
}

function getDirection(cord1){
	var angle = (Math.atan(+getCordinates(cord1,'y')/+getCordinates(cord1,'x')) * (180/Math.PI));
	if(angle < 0) angle = -1*angle;
	if(getCordinates(cord1,'x') > 0 && getCordinates(cord1,'y') > 0)
		return angle;
	if(getCordinates(cord1,'x') < 0 && getCordinates(cord1,'y') > 0)
		return (180 - +angle);
	if(getCordinates(cord1,'x') < 0 && getCordinates(cord1,'y') < 0)
		return (180 + +angle);
	if(getCordinates(cord1,'x') > 0 && getCordinates(cord1,'y') < 0)
		return (360 - +angle);
	if (getCordinates(cord1,'x') == 0){
		if(getCordinates(cord1,'y') > 0) return angle;
		else return (360 - +angle);
	}
	if(getCordinates(cord1,'y') == 0){
		if(getCordinates(cord1,'x') > 0) return angle;
		else return 180;
	}
}

function scalarMultiplication(cord1, scalar){
	var finalVect = [
		scalar*getCordinates(cord1,'x'),
		scalar*getCordinates(cord1,'y'),
		scalar*getCordinates(cord1,'z')
	];

	drawVector(finalVect, '#ff0000');
	return finalVect;
}

function vectorAddition(cord1, cord2){
	var finalVect = [
		+getCordinates(cord1,'x') + +getCordinates(cord2,'x'),
		+getCordinates(cord1,'y') + +getCordinates(cord2,'y'),
		+getCordinates(cord1,'z') + +getCordinates(cord2,'z')
	];

	drawVector(cord1);
	drawVector(cord2);
	drawVector(finalVect, '#ff0000');
	return finalVect;
}

function vectorSubtraction(cord1, cord2){
	var finalVect = [
		+getCordinates(cord1,'x') - +getCordinates(cord2,'x'),
		+getCordinates(cord1,'y') - +getCordinates(cord2,'y'),
		+getCordinates(cord1,'z') - +getCordinates(cord2,'z')
	];

	drawVector(cord1);
	drawVector(cord2);
	drawVector(finalVect, '#ff0000');
	return finalVect;
}

function pointVecAdd(cord1, cord2){
	var finalPt = [
		+getCordinates(cord1,'x') + +getCordinates(cord2,'x'),
		+getCordinates(cord1,'y') + +getCordinates(cord2,'y'),
		+getCordinates(cord1,'z') + +getCordinates(cord2,'z')
	];

	drawPoint(finalPt);
	return finalPt;
}

function pointSubtraction(cord1, cord2){
	var finalVect = [
		+getCordinates(cord1,'x') - +getCordinates(cord2,'x'),
		+getCordinates(cord1,'y') - +getCordinates(cord2,'y'),
		+getCordinates(cord1,'z') - +getCordinates(cord2,'z')
	];

	drawPoint(cord1);
	drawPoint(cord2);
	drawVector(finalVect, '#ff0000');
	return finalVect;
}

function crossProduct(){
	//V1 x V2 = {y1 z2 - z1 y2; z1 x2 - x1 z2; x1 y2 - y1 x2}
	var finalVect = [
		(+getCordinates(cord1,'x') * +getCordinates(cord2,'z')) - (+getCordinates(cord1,'z') * +getCordinates(cord2,'y')),
		(+getCordinates(cord1,'z') * +getCordinates(cord2,'x')) - (+getCordinates(cord1,'x') * +getCordinates(cord2,'z')),
		(+getCordinates(cord1,'x') * +getCordinates(cord2,'y')) - (+getCordinates(cord1,'y') * +getCordinates(cord2,'x'))
	];

	return finalVect;
}

function dotProduct(cord1, cord2){
	return (+getCordinates(cord1,'x')* +getCordinates(cord2,'x')) + (+getCordinates(cord1,'y')* +getCordinates(cord2,'y')) + (+getCordinates(cord1,'z')* +getCordinates(cord2,'z'));
}

function normalizeVect(cord1, cord2){
	var finalVect = [
		+getCordinates(cord1,'x')/+getMagnitude(cord1),
		+getCordinates(cord1,'y')/+getMagnitude(cord1),
		+getCordinates(cord1,'z')/+getMagnitude(cord1)
	];

	drawVector(finalVect, '#ff0000');
	return finalVect;
}

function affineSum(cord1, value){
	//(1-s)*v1+s*v2
	var finalVect = [
		((1- +value) * +getCordinates(cord1,'x')) + (+value * +getCordinates(cord2,'x')),
		((1- +value) * +getCordinates(cord1,'y')) + (+value * +getCordinates(cord2,'y')),
		((1- +value) * +getCordinates(cord1,'z')) + (+value * +getCordinates(cord2,'z'))
	];

	drawVector(finalVect, '#ff0000');
	return finalVect;
}