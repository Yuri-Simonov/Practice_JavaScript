//         Задача 3.5      ============================

let text = document.querySelector('#textarea');
let checkbox1 = document.querySelector('#checkbox1')
let checkbox2 = document.querySelector('#checkbox2')
let checkbox3 = document.querySelector('#checkbox3')
let checkbox4 = document.querySelector('#checkbox4')
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
//======================================
function persentFunc(str) {
	let persent = {};

	for (let i = 0; i < str.length; i++) {
		if (persent[str[i]] === undefined) {
			persent[str[i]] = 0;
		}
		persent[str[i]]++;

	}
	return persent;
}

text.addEventListener('blur', function () {
	let a = text.value.split(' ').join('');

	if (checkbox1.checked) {
		p1.textContent = 'Вы ввели ' + text.value.split(' ').length + ' слова';
	}
	if (checkbox2.checked) {
		p2.textContent = 'Вы ввели ' + text.value.split('').length + ' символов';
	}
	if (checkbox3.checked) {
		p3.textContent = 'Вы ввели ' + text.value.split(' ').join('').length + ' символов без пробелов';
	}
	if (checkbox4.checked) {
		p4.textContent = JSON.stringify(persentFunc(a))
	}


})


// html =================================


{/* <main>
			<textarea id="textarea" cols="30" rows="10"></textarea><br>
			<input id="checkbox1" type="checkbox">
			<p id="p1"></p>
			<input id="checkbox2" type="checkbox">
			<p id="p2"></p>
			<input id="checkbox3" checked type="checkbox">
			<p id="p3"></p>
			<input id="checkbox4" type="checkbox">
			<p id="p4"></p>
		</main> */}
