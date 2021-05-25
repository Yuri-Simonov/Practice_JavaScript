//         Задача 3.2      ============================

let text = document.querySelector('#textarea');
let p = document.querySelector('p');

//======================================


text.addEventListener('blur', function () {
	p.textContent = 'Вы ввели ' + text.value.split('').length + ' символов';
})

// html =================================

{/* <main>
			<textarea id="textarea" cols="30" rows="10"></textarea>
			<p></p>
		</main> */}