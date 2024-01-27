let btn = document.getElementById('btn');
let input = document.getElementById('input');
let para = document.getElementById('para');

btn.addEventListener('click', LuckyDay);

function LuckyDay() {
	var x = input.value.trim();
	var num = parseInt(x);
	if (!isNaN(num)) {
		let days = [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		];
		let luckyDay = days[num % 7];
		para.innerText = luckyDay;
	} else {
		console.log('Please Enter a Valid Number');
	}
}
