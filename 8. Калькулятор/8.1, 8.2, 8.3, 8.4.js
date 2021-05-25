//         Задача 8.1, 8.2, 8.3 и 8.4   ============================

let input = document.querySelector('#input');
let mess = document.querySelector('.message');
let result = document.querySelector('.result');
let reset = document.querySelector('.reset');
let operator = document.querySelector('.operator');
let span = document.querySelector('#span');
let equal = document.querySelector('.equal');
let p = document.querySelectorAll('p');
let math = document.querySelectorAll('.math')


for (let elem of p) {
	elem.addEventListener('click', (event) => {
		if (elem.classList.contains('math') || elem.classList.contains('operator')) {
			input.value = event.target.innerHTML;
			operator.textContent = event.target.innerHTML;
		}

		if (elem.classList.contains('numb')) {
			input.value += event.target.innerHTML
		}

		if (elem.classList.contains('equal') || elem.classList.contains('reset')) {
		} else {
			span.textContent += event.target.textContent
		}

		if (elem.classList.contains('reset')) {
			input.value = '';
			span.textContent = '';
		}
		let arr = ['++', '+-', '+*', '+/', '--', '-+', '-*', '-/', '**', '*+', '*-', '*/', '//', '/+', '/-', '/*']
		for (let i = 0; i < arr.length; i++) {
			if (span.textContent.endsWith(arr[i])) {
				span.textContent = span.textContent.slice(0, length - 2) + event.target.innerHTML;
			}
		}


	})
	equal.addEventListener('click', () => {
		input.value = eval(span.textContent);
		result.textContent = 'Результат: ' + input.value;
	})
}
