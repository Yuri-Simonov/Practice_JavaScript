//         Задача 2.2      ============================

let button = document.querySelector('#button');
let p = document.querySelector('p');
let total;

//======================================

function result(a, b, c) {

	if (((a ** 2) == ((b ** 2) + (c ** 2))) || ((b ** 2) == ((a ** 2) + (c ** 2))) || ((c ** 2) == ((b ** 2) + (a ** 2)))) {
		return total = 'Числа подходят под теорему'
	} else {
		return total = 'Числа не подходят под теорему'
	}

}

button.addEventListener('click', function () {
	let input1 = Number(document.querySelector('#input1').value);
	let input2 = Number(document.querySelector('#input2').value);
	let input3 = Number(document.querySelector('#input3').value);


	result(input1, input2, input3);
	p.textContent = total

});

//          html         ============================================================

{/* <main class="page">
			<input type="number" id="input1" value="3">
			<input type="number" id="input2" value="4">
			<input type="number" id="input3" value="5">
			<button id="button">Проверить</button>
			<p></p>
		</main> */}