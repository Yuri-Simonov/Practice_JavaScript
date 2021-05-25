//         Задача 11.1, 11.2   ============================

let bigInput = document.querySelector('.big');
let radios = document.querySelector('.radios');
let result = document.querySelector('.result__goroscop');
let p = document.querySelector('p');
let radio1 = document.querySelector('#input11')
let radio2 = document.querySelector('#input22')
let radio3 = document.querySelector('#input33')


let goroscop = {
	oven: ['Будет жесть', 'Не торопись', ':)'],
	telec: ['Будут деньги', 'Будет грусть', 'Будет весело'],
	blizneci: ['Будет все четко', 'Ждите сюрприз', 'Встретите незнакомца'],
	rak: [':(', 'Будет все чики-пуки', 'Надо отдохнуть'],
	lev: ['Тревога ожидает', 'Встретите старого друга', 'Больше нужно улыбаться'],
	deva: ['Не торопитесь', 'Надо быть внимательнее', 'будет битва'],
	vesi: ['Будет все четко', 'Ждите сюрприз', 'Встретите незнакомца'],
	scorpion: ['Скажите приятные слова', 'Встретите старого друга', 'Больше нужно улыбаться'],
	strelec: ['Будут деньги', 'Будет грусть', 'Будет весело'],
	vodoley: [':(', 'Будет все чики-пуки', 'Надо отдохнуть'],
	kozerog: ['Будет жесть', 'Не торопись', ':)'],
	ribi: ['Будет сенсация', 'повороты судьбы', 'проблемы в семье'],
}

function func() {

	let date = bigInput.value;

	if (date >= '03.21' && date <= '04.20') {
		result.textContent = goroscop.oven[i];
	} else if (date >= '04.21' && date <= '05.21') {
		result.textContent = goroscop.telec[i];
	} else if (date >= '05.22' && date <= '06.21') {
		result.textContent = goroscop.blizneci[i];
	} else if (date >= '06.22' && date <= '07.22') {
		result.textContent = goroscop.rak[i];
	} else if (date >= '07.23' && date <= '08.21') {
		result.textContent = goroscop.lev[i];
	} else if (date >= '08.22' && date <= '09.23') {
		result.textContent = goroscop.deva[i];
	} else if (date >= '09.24' && date <= '10.23') {
		result.textContent = goroscop.vesi[i];
	} else if (date >= '10.24' && date <= '11.23') {
		result.textContent = goroscop.scorpion[i];
	} else if (date >= '11.24' && date <= '12.22') {
		result.textContent = goroscop.strelec[i];
	} else if (date >= '12.23' && date <= '01.20') {
		result.textContent = goroscop.vodoley[i];
	} else if (date >= '01.21' && date <= '02.19') {
		result.textContent = goroscop.kozerog[i];
	} else if (date >= '02.20' && date <= '03.20') {
		result.textContent = goroscop.ribi[i];
	} else {
		result.textContent = 'Неверно введены данные';
	}
}



let i = 0;

radios.addEventListener('change', () => {
	if (radio2.checked) {
		i = 1;
		console.log(radio2.checked);
	} else if (radio3.checked) {
		i = 2;
		console.log(radio3.checked);
	} else {
		i = 0;
	}
	func();
})




bigInput.addEventListener('change', func)



