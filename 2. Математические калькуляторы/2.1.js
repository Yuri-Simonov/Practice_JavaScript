//         Задача 2.1       ============================

let p = document.querySelector('p');
let x1;
let x2;
let disc = 0;

//======================================

let result = (a = 0, b = 0, c = 0) => {
	disc = (b ** 2) - (4 * a * c);
	if (disc < 0) {
		x1 = 'none';
		x2 = 'none';

	}
	if (disc == 0) {
		x1 = (-b + Math.sqrt(disc)) / (2 * a);

	}
	if (disc > 0) {
		x1 = (-b + +Math.sqrt(disc)) / (2 * a)
		x2 = (-b - Math.sqrt(disc)) / (2 * a)
		console.log(x1);
	}
	return x1, x2
}

input1.addEventListener('input', function () {
	let input1 = document.querySelector('#input1').value;
	let input2 = document.querySelector('#input2').value;
	let input3 = document.querySelector('#input3').value;

	result(input1, input2, input3);
	p.textContent = 'Answer: ' + x1 + ' and ' + x2;

});
input2.addEventListener('input', function () {
	let input1 = document.querySelector('#input1').value;
	let input2 = document.querySelector('#input2').value;
	let input3 = document.querySelector('#input3').value;

	result(input1, input2, input3);
	p.textContent = 'Answer: ' + x1 + ' and ' + x2;

});
input3.addEventListener('input', function () {
	let input1 = document.querySelector('#input1').value;
	let input2 = document.querySelector('#input2').value;
	let input3 = document.querySelector('#input3').value;

	result(input1, input2, input3);
	p.textContent = 'Answer: ' + x1 + ' and ' + x2;

});


//          html         ============================================================

{/* <main class="page">
			<input type="number" id="input1" value="1">
			<input type="number" id="input2" value="-2">
			<input type="number" id="input3" value="-3">
			<p></p>
		</main> */}