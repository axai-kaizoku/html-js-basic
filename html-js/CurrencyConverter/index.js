let select1 = document.getElementById('currency1-select');
let select2 = document.getElementById('currency2-select');

let input1 = document.getElementById('currency1');
let input2 = document.getElementById('currency2');

select1.addEventListener('change', convertCurrency);
select2.addEventListener('change', convertCurrency2);

input1.addEventListener('change', convertCurrency);
input2.addEventListener('change', convertCurrency2);

function convertCurrency() {
	let curr1 = parseFloat(input1.value);
	let val1 = select1.value;
	let val2 = select2.value;
	if (!isNaN(curr1)) {
		if (val1 === 'INR' && val2 === 'USD') {
			input2.value = (curr1 * 0.012).toFixed(2);
		} else if (val1 === 'USD' && val2 === 'INR') {
			input2.value = (curr1 * 83).toFixed(2);
		} else if (val1 === 'INR' && val2 === 'YEN') {
			input2.value = (curr1 * 1.79).toFixed(2);
		} else if (val1 === 'YEN' && val2 === 'INR') {
			input2.value = (curr1 * 0.56).toFixed(2);
		} else if (val1 === 'USD' && val2 === 'YEN') {
			input2.value = (curr1 * 148.47).toFixed(2);
		} else if (val1 === 'YEN' && val2 === 'USD') {
			input2.value = (curr1 * 0.0067).toFixed(2);
		} else {
			input2.value = input1.value;
		}
	}
}

function convertCurrency2() {
	let curr2 = parseFloat(input2.value);
	let val1 = select1.value;
	let val2 = select2.value;
	if (!isNaN(curr2)) {
		if (val1 === 'INR' && val2 === 'USD') {
			input1.value = (curr2 * 83).toFixed(2);
		} else if (val1 === 'USD' && val2 === 'INR') {
			input1.value = (curr2 * 0.012).toFixed(2);
		} else if (val1 === 'INR' && val2 === 'YEN') {
			input1.value = (curr2 * 0.56).toFixed(2);
		} else if (val1 === 'YEN' && val2 === 'INR') {
			input1.value = (curr2 * 1.79).toFixed(2);
		} else if (val1 === 'USD' && val2 === 'YEN') {
			input1.value = (curr2 * 0.0067).toFixed(2);
		} else if (val1 === 'YEN' && val2 === 'USD') {
			input1.value = (curr2 * 148.47).toFixed(2);
		} else {
			input1.value = input2.value;
		}
	}
}
