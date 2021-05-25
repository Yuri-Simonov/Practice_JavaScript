let input = document.querySelector('#input');
let message = document.querySelector('#message');
let result = document.querySelector('.result');



let cities = [];

input.addEventListener('change', () => {
	let a = input.value;

	if (cities.length != 0) {
		let b = cities[cities.length - 1];
		let c = b[b.length - 1];
		if ((cities.indexOf(a) == -1) && (a[0] == c)) {
			cities.push(input.value);
			input.value = '';


		} else {
			if (cities.indexOf(a) != -1) {
				alert('Такой город уже есть')
			} else {
				alert('Что-то ты вводишь не так, проверь ввод еще раз')
			}

		}
	}
	if (cities.length == 0) {
		cities.push(input.value);
		input.value = '';

	}
	result.textContent = 'Использованные названия городов: ' + cities.join(', ');
})

