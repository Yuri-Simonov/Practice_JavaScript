//         Задача 2.5      ============================

let button = document.querySelector('#button');
let p = document.querySelector('p');
let numbers1 = [];
let numbers2 = [];
let total = [];

//======================================



button.addEventListener('click', function () {
	let input1 = Number(document.querySelector('#input1').value);
	let input2 = Number(document.querySelector('#input2').value);

	for (let i = 1; i <= input1; i++) {
		if (input1 % i == 0) {
			numbers1.push(i);
		}
	}
	for (let i = 1; i <= input2; i++) {
		if (input2 % i == 0) {
			numbers2.push(i);
		}
	}

	for (let i = 0; i < numbers1.length; i++) {
		for (let j = 0; j < numbers2.length; j++) {
			if (numbers1[i] == numbers2[j]) {
				total.push(numbers1[i]);
			}
		}
	}

	p.textContent = Math.max(...total);

});



//          html         =================================


{/* <main class="page">
			<input type="number" id="input1" value="24">
			<input type="number" id="input2" value="30">
			<button id="button">Проверить</button>
			<p></p>
		</main> */}