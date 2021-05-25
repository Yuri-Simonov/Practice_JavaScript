let parent = document.querySelector('#parent');
let tab = document.querySelectorAll('.tab');
let a = document.querySelectorAll('a');



for (let i = 0; i < tab.length; i++) {
	tab[0].classList.add('active');

	a[i].addEventListener('click', function (event) {
		event.preventDefault();
		tab[i].classList.toggle('active');
	});

}