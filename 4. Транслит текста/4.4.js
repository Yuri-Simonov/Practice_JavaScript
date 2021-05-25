//         Задача 4.4      ============================

let lang = document.querySelector('#en');
let checkbox = document.querySelector('#checkbox');
let divText = document.querySelector('#divText');

let translit = {
	а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z',
	и: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's',
	т: 't', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sh', ы: 'i', ъ: '`',
	ь: '`', э: 'je', ю: 'yu', я: 'ya', А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E',
	Ё: 'YO', Е: 'ZH', Ж: 'ZH', З: 'H', И: 'I', Й: 'I', К: 'K', Л: 'L', М: 'M', Н: 'N',
	О: 'O', П: 'P', Р: 'R', С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'H', Ц: 'C', Ч: 'CH',
	Ш: 'SH', Щ: 'SH', Ы: 'I', Ъ: '`', Ь: '`', Э: 'JE', Ю: 'YU', Я: 'YA',
}


//===========================================================



en.addEventListener('input', () => {
	if (checkbox.checked) {
		let ruText = lang.value;
		let enText = '';

		start: for (let i = 0; i < ruText.length; i++) {
			for (let key in translit) {
				if (ruText[i] == key) {
					enText += translit[key]
					continue start;
				}
				else if (ruText[i] == ' ') {
					enText += ' ';
					continue start;
				}
			}
		}
		divText.textContent = enText;

	} else {
		let enText = lang.value;
		let ruText = '';

		start: for (let i = 0; i < enText.length; i++) {
			for (let key in translit) {
				if (enText[i] == translit[key]) {
					ruText += key;
					continue start;
				}
				else if (enText[i] == ' ') {
					ruText += ' ';
					continue start;
				}
			}
		}
		divText.textContent = ruText;
	}
})


//===========================================================



// html =================================

{/*<main>
			<textarea id="en" cols="30" rows="10"></textarea><br>
			<input id="checkbox" type="checkbox">
			<div id="divText"></div>
		</main>  */ }