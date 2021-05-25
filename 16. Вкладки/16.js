let tab = document.querySelectorAll('.tab');
let a = document.querySelectorAll('a');
let tabs = document.querySelector('.tabs');
let parent = document.querySelector('#parent');
let menu = document.querySelector('.menu');
let active = document.querySelector('.active');



for (let i = 0; i < tab.length; i++) {
	tab[0].classList.add('active');
	a[0].classList.add('active');


	a[i].addEventListener('click', function (event) {
		event.preventDefault();
		for (let j = 0; j < tab.length; j++) {
			tab[j].classList.remove('active');
			a[j].classList.remove('active');
		}
		tab[i].classList.add('active');
		a[i].classList.add('active');
	});

}