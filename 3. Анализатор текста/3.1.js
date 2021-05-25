//         Задача 3.1      ============================

let text = document.querySelector('#textarea');
let p = document.querySelector('p');

//======================================


text.addEventListener('blur', function () {
	p.textContent = 'Вы ввели ' + text.value.split(' ').length + ' слова';
})

// html =================================

{/* <main>
			<textarea id="textarea" cols="30" rows="10"></textarea>
			<p></p>
		</main> */}