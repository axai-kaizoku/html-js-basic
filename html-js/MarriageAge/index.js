let name = document.getElementById('input1');
let age = document.getElementById('input2');
let gender = document.getElementById('slct');
let btn = document.getElementById('btn');
let para = document.getElementById('para');

btn.addEventListener('click', getStatus);

function getStatus() {
	var inputName = name.value.trim();
	var inputAge = parseInt(age.value);
	var inputGender = gender.value;

	if (!isNaN(inputAge)) {
		if (inputGender === 'Male' && inputAge < 21) {
			para.innerText = `${inputName}, Your age is not eligible for Marriage. The valid age for Male is 21`;
		} else if (inputGender === 'Male' && inputAge >= 21) {
			para.innerText = `${inputName}, Your Age is eligible for Marriage`;
		} else if (inputGender === 'Female' && inputAge < 18) {
			para.innerText = `${inputName}, Your age is not eligible for Marriage. The valid age for Female is 18`;
		} else if (inputGender === 'Female' && inputAge >= 18) {
			para.innerText = `${inputName}, Your Age is eligible for Marriage`;
		}
	} else if (inputName === '' || inputAge === '') {
		para.innerText = 'Please Enter Valid Values in Input Fields';
	} else {
		para.innerText = 'Please enter valid age';
	}
}
