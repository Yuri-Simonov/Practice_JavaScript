let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');
let list = document.querySelector('#list');

let arr = ['Belarus', 'Belgium', 'Bulgaria', 'Russia', 'Japan', 'China', 'Germany', 'France', 'Sweden', 'USA', 'Ukrain', 'Greece', 'Romania', 'Croatia',];

elem.addEventListener('input', (event) => {
	let input = event.target.value;
	let filterArr = arr.filter(elem => elem.startsWith(input));
	list.textContent = '';
	for (let elem1 of filterArr) {
		let li = document.createElement('li');
		li.textContent = elem1;
		list.append(li);
	}

})