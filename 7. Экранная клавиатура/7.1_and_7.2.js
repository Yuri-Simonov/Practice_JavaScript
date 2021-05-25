//         Задача 7.1 и 7.2    ============================

let input = document.querySelector('#input');
let div = document.querySelector('#container');
let p = document.querySelectorAll('p');
let caps = document.querySelector('#caps');

for (let elem of p) {
	elem.addEventListener('click', (event) => {

		if (event.target == caps) {
			div.classList.toggle('capslock');

		} else
			if (div.classList.contains('capslock')) {
				input.value += event.target.innerHTML.toUpperCase();
			} else {
				input.value += event.target.innerHTML
			}
	})
}


