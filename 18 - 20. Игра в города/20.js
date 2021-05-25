let input = document.querySelector('#input');
let message = document.querySelector('#message');
let result = document.querySelector('.result');
let player1 = document.querySelector('.player1');
let computer = document.querySelector('.computer');


let cities = [];
let citiesForComputer = ['Москва', 'Мадрид', 'Вена', 'Барселона', 'Киев', 'Анапа', 'Дели', 'Анкара', 'Варшава', 'Иркутск', 'Абакан', 'Новосибирск', 'Якутск', 'Вашингтон', 'Париж', 'Сидней', 'Лиссабон', 'Пекин', 'Токио', 'Киото', 'Лондон', 'Каир', 'Тегеран', 'Веллингтон',];

input.addEventListener('change', () => {
	let a = input.value;
	//===================================================================================================
	if (player1.classList.contains('active')) {
		if (cities.length != 0) {
			let b = cities[cities.length - 1];
			let c = b[b.length - 1];
			if ((cities.indexOf(a) == -1) && (a[0].toLowerCase() == c)) {
				cities.push(input.value);
				input.value = '';
				player1.classList.toggle('active');
				computer.classList.toggle('active');
				result.textContent = 'Использованные названия городов: ' + cities.join(', ');
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
			player1.classList.toggle('active');
			computer.classList.toggle('active');
			result.textContent = 'Использованные названия городов: ' + cities.join(', ');
		}
	}
	//===================================================================================================
	function comp() {
		let b = cities[cities.length - 1];
		let c = b[b.length - 1];
		let arr = [];
		for (let i = 0; i < citiesForComputer.length; i++) {
			if (citiesForComputer[i][0].toLowerCase().startsWith(c) && (cities.indexOf(citiesForComputer[i]) == -1)) {
				arr.push(citiesForComputer[i]);
			}
		}
		if (arr.length == 0) {
			alert('Компьютер: "У меня закончились города на эту букву. Вы победили меня :("')
		} else {
			console.log(arr);
			cities.push(arr[0]);
			console.log(arr[0]);
			input.value = '';
			player1.classList.toggle('active');
			computer.classList.toggle('active');
			alert('Компьютер выбрал город: ' + arr[0]);
			result.textContent = 'Использованные названия городов: ' + cities.join(', ');
		}
	}

	if (computer.classList.contains('active')) {
		setTimeout(() => { comp() }, 1000)
	}
	//===================================================================================================
})
