//         Задача 6.2     ============================

let bit = document.querySelectorAll('.bit');
let p = document.querySelector('#p');
let num = 59;
let arr = [];
let count = 0;
let greenCell = 0;


for (let i = 1; i <= 10; i++) {
	arr.push(Math.ceil(Math.random() * 100))
}
console.log(arr);
for (let elem of bit) {
	elem.textContent = count + 1;
	count++;

	elem.addEventListener('click', (event) => {
		if (arr.indexOf(Number(elem.textContent)) != -1) {
			event.target.style.background = 'green';
			++greenCell;
			console.log(greenCell);
		} else {
			event.target.style.background = 'red'
		}
	})
}

let a = setInterval(() => {
	if (num > 10) {
		p.textContent = 'У вас осталось: 00:' + num;
	}
	if (num < 10) {
		p.textContent = 'У вас осталось: 00:0' + num;
	}
	if (num <= 0) {
		p.textContent = 'К сожалению, вы проиграли';
		clearInterval(a);
		for (let elem of bit) {
			elem.style.background = 'red'
		}
	}
	if (greenCell == 10) {
		p.textContent = 'Ура, вы победили!';
		clearInterval(a);
		for (let elem of bit) {
			elem.style.background = 'green'
		}
	}

	num--;
}, 1000)