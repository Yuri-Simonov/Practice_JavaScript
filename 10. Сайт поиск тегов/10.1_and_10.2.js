//         Задача 10.1, 10.2   ============================

let input = document.querySelector('#input');
let p = document.querySelector('p');

let obj = {
	p: 'Определяет текстовый абзац',
	a: 'Предназначен для создания ссылок',
	img: 'Предназначен для отображения на веб-странице изображений в графическом формате GIF, JPEG или PNG',
	div: 'Нужен для создания обёртки',
	body: 'Тело документа',
}




input.addEventListener('change', () => {
	for (let key in obj) {
		if (input.value == key) {
			p.textContent = obj[key];
		} else {
			p.textContent = 'Я слишком ленивый, чтобы вбивать все теги :)'
		}
	}
})
