//         Задача 6.1      ============================

let bit = document.querySelectorAll('.bit');
let arr = [];
let count = 0;

for (let i = 1; i <= 10; i++) {
	arr.push(Math.ceil(Math.random() * 100))
}
console.log(arr);
for (let elem of bit) {
	elem.textContent = count + 1;
	count++;

	elem.addEventListener('click', (event) => {
		if (arr.indexOf(Number(elem.textContent)) != -1) {
			event.target.style.background = 'green'
		} else {
			event.target.style.background = 'red'
		}
	})
}
