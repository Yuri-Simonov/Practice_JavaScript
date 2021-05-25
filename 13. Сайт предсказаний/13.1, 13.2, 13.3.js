let timer = document.querySelector('#timer');
let text = document.querySelector('#text');
let startButton = document.querySelector('#start');
let stopButton = document.querySelector('#stop');
let a;
let randomNumber;


let obj = {
	1: 'Вам повезет!',
	2: 'Тебе крышка!',
	3: 'Ждите гостей',
	4: 'Пора действовать!',
	5: 'Надо поспать',
	6: 'Надо покушать',
	7: 'Займись спортом уже наконец',
	8: 'Сделай зарядку',
	9: 'Сходи на свидание',
}


function random() {
	a = Math.ceil(Math.random() * 9);
	timer.textContent = a;
}

startButton.addEventListener('click', function func() {
	randomNumber = setInterval(random, 100);
	this.removeEventListener('click', func);
	startButton.style.display = 'none';
	stopButton.style.display = 'block';
});

stopButton.addEventListener('click', function func() {
	console.log('huy');
	text.textContent = obj[a];
	this.removeEventListener('click', func);
	clearInterval(randomNumber);
	stopButton.style.display = 'none';
	if (a == 2 || a == 7 || a == 8 || a == 9) {
		text.style.color = 'red';
	} else {
		text.style.color = 'green';
	}
})