let input = document.getElementById('input');
let btn = document.getElementById('btn');
let para = document.getElementById('para');

btn.addEventListener('click', verify);

function verify() {
	let pass = input.value.trim();
	if (pass.length === 0) {
		para.innerText = 'Enter password first!';
	} else if (pass.length < 6) {
		para.innerText = 'Password length should be minimum 6 char!';
	} else if (pass.length >= 6 && pass.length < 8) {
		para.innerText = 'Password is weak!';
	} else if (pass.length <= 8) {
		para.innerText = 'Password is medium!';
	} else if (pass.length > 8) {
		para.innerText = 'Password is strong!';
	}
}
