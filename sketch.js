function setup() {
	noCanvas();
	loadStrings('owords.txt', gotOrientir);
	loadStrings('rwords.txt', gotRedo);
}

function gotOrientir(data1) {
	text1 = data1;
}

function gotRedo(data2) {
	text2 = data2;
}

let myVar = setInterval(changeOrientir, 500);
let myVar2 = setInterval(changeRedo, 500);

function changeOrientir() {
		let index1 = round(random(text1.length));
		var orientir = document.getElementById('orientir');
		orientir.innerHTML = text1[index1];
		console.log(index1);
}

function changeRedo() {
	let index2 = round(random(text2.length));
	var orientir = document.getElementById('redo');
	orientir.innerHTML = text2[index2];
	console.log(index2);
}

function sayHi(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
  
	document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
  }


function draw() {
  background(220);
}
