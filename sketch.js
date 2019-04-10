var count = 0;

function setup() {
	frameRate(3);
	noCanvas();
	loadStrings('owords.txt', gotOrientir);
	loadStrings('rwords.txt', gotRedo);
}

function draw() {
	background(220);
	count = count+1;
	console.log(count);
	if (count > 80) {
		count = 0;
	}
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
		orientir.innerHTML = text1[count];
		console.log(index1);
}

function changeRedo() {
	let index2 = round(random(text2.length));
	var orientir = document.getElementById('redo');
	orientir.innerHTML = text2[count];
	console.log(index2);
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

