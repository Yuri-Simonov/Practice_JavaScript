//         Задача 11.1, 11.2   ============================

let input = document.querySelector('#input');
let result = document.querySelector('.result');
let p = document.querySelector('p');


let obj2000 = {
	'20.01.2000': 'Концерт',
	'21.01.2000': 'Митинг',
	'22.01.2000': 'Свадьба',
	'23.01.2000': 'Что-то еще было в 2000 году',

}
let obj2011 = {

	'20.01.2011': 'Футбол',
	'21.01.2011': 'Выпускной',
	'22.01.2011': 'Сушняк',
	'23.01.2011': 'Возвращение к жизни',
	'24.01.2011': 'Окончание каникул',
}

let i = 1;


input.addEventListener('change', func);


function func() {
	if (input.value.endsWith('2000')) {
		for (let key in obj2000) {
			let div = document.createElement('div');
			div.classList.add('result__item');
			result.append(div);

			let p1 = document.createElement('p');
			p1.classList.add('result-data');
			p1.textContent = key;
			div.append(p1);

			let p2 = document.createElement('p');
			p2.classList.add('result-number');
			p2.textContent = 'Событие №' + i;
			div.append(p2);
			i++;

			let p3 = document.createElement('p');
			p3.classList.add('result-type');
			p3.textContent = obj2000[key];
			div.append(p3);
		}
	}
	if (input.value.endsWith('2011')) {
		for (let key in obj2011) {
			let div = document.createElement('div');
			div.classList.add('result__item');
			result.append(div);

			let p1 = document.createElement('p');
			p1.classList.add('result-data');
			p1.textContent = key;
			div.append(p1);

			let p2 = document.createElement('p');
			p2.classList.add('result-number');
			p2.textContent = 'Событие №' + i;
			div.append(p2);
			i++;

			let p3 = document.createElement('p');
			p3.classList.add('result-type');
			p3.textContent = obj2011[key];
			div.append(p3);
		}
	}
}