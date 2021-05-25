//         Задача 5.1      ============================

let input = document.querySelector('#input');
let divText = document.querySelector('#divText');

let a = Math.ceil(Math.random() * 100 + 1)

input.addEventListener('change', () => {
	if (a > input.value) {
		divText.textContent = 'Маловато';
	}
	if (a < input.value) {
		divText.textContent = 'Многовато';
	}
	if (a == input.value) {
		divText.textContent = 'Вы угадали! Молодец!';
	}

})


// html =================================

{/* 

	<main>
			<p>Угадайте число от 1 до 100: </p>
			<input id="input" type="text">
			<br>
			<br>
			<div id="divText"></div>
	</main> 

	*/}