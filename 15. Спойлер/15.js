let spoiler1 = document.querySelector('.spoiler1');
let spoiler2 = document.querySelector('.spoiler2');
let toggle1 = document.querySelector('.toggle');
let toggle2 = document.querySelector('.toggler');

toggle1.addEventListener('click', (event) => {
	event.preventDefault();
	spoiler1.classList.toggle('active');
})
toggle2.addEventListener('click', (event) => {
	event.preventDefault();
	spoiler2.classList.toggle('active');
})


