//         Задача 3.4      ============================

let text = document.querySelector('#textarea');



//======================================
function persentFunc(str) {
	let persent = {};

	for (let i = 0; i < str.length; i++) {
		if (persent[str[i]] === undefined) {
			persent[str[i]] = 0;
		}
		persent[str[i]]++;

	}
	return persent;
}




text.addEventListener('blur', function () {
	let a = text.value.split(' ').join('');

	p4.textContent = JSON.stringify(persentFunc(a))
})


// html =================================


{/* <main>
	<textarea id="textarea" cols="30" rows="10"></textarea>
	<p></p>
	<p id="pre"></p>
</main> */}
