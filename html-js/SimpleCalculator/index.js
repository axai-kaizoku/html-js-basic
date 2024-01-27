let num1 = document.getElementById('input1');
let num2 = document.getElementById('input2');

let addition = document.getElementById('addition');
let multiplication = document.getElementById('multiplication');
let subtraction = document.getElementById('subtraction');
let division = document.getElementById('division');

let para = document.getElementById('para');

function input() {
	let no1 = parseInt(num1.value);
	let no2 = parseInt(num2.value);
	if (no1 === '' || no2 === '') {
		para.innerText = 'Enter valid numbers!!';
	} else if (!isNaN(no1) || !isNaN(no2)) {
		let nums = [no1, no2];
		return nums;
	} else {
		para.innerText = 'Enter valid numbers!!';
	}
}

function add() {
	let numbers = input();
	para.innerText = isNaN(numbers[0] + numbers[1])
		? 'Invalid Operation !'
		: numbers[0] + numbers[1];
}
function mul() {
	let numbers = input();
	para.innerText = isNaN(numbers[0] + numbers[1])
		? 'Invalid Operation !'
		: numbers[0] * numbers[1];
}
function sub() {
	let numbers = input();
	para.innerText = isNaN(numbers[0] + numbers[1])
		? 'Invalid Operation !'
		: numbers[0] - numbers[1];
}
function div() {
	let numbers = input();
	para.innerText = isNaN(numbers[0] + numbers[1])
		? 'Invalid Operation !'
		: numbers[0] / numbers[1];
}

addition.addEventListener('click', add);
subtraction.addEventListener('click', sub);
multiplication.addEventListener('click', mul);
division.addEventListener('click', div);
