//         Задача 3.3      ============================

let text = document.querySelector('#textarea');
let p = document.querySelector('p');

//======================================


text.addEventListener('blur', function () {
	p.textContent = 'Вы ввели ' + text.value.split(' ').join('').length + ' символов без пробелов';
})


// html =================================

{/* <main>
			<textarea id="textarea" cols="30" rows="10"></textarea>
			<p></p>
		</main> */}