//         Задача 4.1      ============================

let ru = document.querySelector('#ru');
let en = document.querySelector('#en');

let translit = {
	а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z',
	и: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's',
	т: 't', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sh', ы: 'i', ъ: '`',
	ь: '`', э: 'je', ю: 'yu', я: 'ya', А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E',
	Ё: 'YO', Е: 'ZH', Ж: 'ZH', З: 'H', И: 'I', Й: 'I', К: 'K', Л: 'L', М: 'M', Н: 'N',
	О: 'O', П: 'P', Р: 'R', С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'H', Ц: 'C', Ч: 'CH',
	Ш: 'SH', Щ: 'SH', Ы: 'I', Ъ: '`', Ь: '`', Э: 'JE', Ю: 'YU', Я: 'YA',
}

ru.addEventListener('blur', func)

function func() {
	let ruText = ru.value;
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
	en.value = enText;
}




// html =================================

{/* <main>
			<textarea id="ru" cols="30" rows="10"></textarea><br>
			<textarea id="en" cols="30" rows="10"></textarea><br>
		</main> */}