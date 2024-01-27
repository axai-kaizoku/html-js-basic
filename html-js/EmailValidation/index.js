let input = document.getElementById('email');
let btn = document.getElementById('btn');
let para = document.getElementById('para');

btn.addEventListener('click', verify);

function verify() {
	let email = input.value;
	let emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
	if (emailregex.test(email)) para.innerText = 'your email verified';
	else para.innerText = 'your email is not verified';
}
