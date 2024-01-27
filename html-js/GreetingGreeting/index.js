let first = document.getElementById('first');
let second = document.getElementById('second');
let output = document.getElementById('output');
let btn = document.getElementById('btn');

btn.addEventListener('click', greeting);

function greeting() {
	let firstName = first.value.trim();
	let lastName = second.value.trim();
	if (firstName === '' || lastName === '') {
		output.innerText = 'Enter valid Name! ';
	} else {
		output.innerText = `Hello, ${firstName} ${lastName}`;
	}
}
