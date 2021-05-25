//         Задача 9.1, 9.2, 9.3 и 9.4   ============================

let nowDay = new Date();
let numbers = document.querySelector('.numbers');
let i = 1;
let spanData = document.querySelector('span');
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
//let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let prevMonth = document.querySelector('.prev');
let nextMonth = document.querySelector('.next');

for (let i = 1; i <= 31; i++) {
	let p = document.createElement('p');
	p.innerHTML = i;
	numbers.appendChild(p);

	if (p.textContent == nowDay.getDate()) {
		p.classList.add('red')
	}
	/* if (months[0] || months[2] || months[4] || months[6] || months[7] || months[9] || months[11]) {
		p.classList.add('green')
	} */
}

spanData.textContent = 'Месяц: ' + months[nowDay.getMonth()] + ',    ' + 'Год: ' + nowDay.getFullYear();

prevMonth.addEventListener('click', () => {
	spanData.textContent = 'Месяц: ' + months[nowDay.getMonth() - i] + ',    ' + 'Год: ' + nowDay.getFullYear();
	i++;
})
nextMonth.addEventListener('click', () => {
	spanData.textContent = 'Месяц: ' + months[nowDay.getMonth() + i] + ',    ' + 'Год: ' + nowDay.getFullYear();
	i++;
})
