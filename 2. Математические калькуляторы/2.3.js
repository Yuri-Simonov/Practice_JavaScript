//         Задача 2.3      ============================

let button = document.querySelector('#button');
let p = document.querySelector('p');
let numbers = [];
let total;
//======================================



button.addEventListener('click', function () {
	let input1 = Number(document.querySelector('#input1').value);

	for (let i = 1; i < input1; i++) {
		if (input1 % i == 0) {
			numbers.push(i);
		}
	}
	total = numbers.join(', ')
	p.textContent = total;

});


//          html         =================================

{/* <main class="page">
	<input type="number" id="input1" value="12">
		<button id="button">Проверить</button>
		<p></p>
		</main> */}