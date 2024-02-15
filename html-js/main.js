// // function argument

// const fn = (a) => console.log(a);

// for (var i = 0; i < 3; i++) {
// 	setTimeout(function () {
// 		fn(i);
// 	}, 0);
// }
// for (let i = 0; i < 3; i++) {
// 	setTimeout(function () {
// 		fn(i);
// 	}, 0);
// }

// // function evaluation and error handling

// const solve = (a) => {
// 	if (a === 0) {
// 		console.log('a');
// 		return 0;
// 	} else if (a === 1) {
// 		console.log('b');
// 		return 1;
// 	} else {
// 		console.log('c');
// 		return solve(a - 1) + solve(a - 2);
// 	}
// };
// const result = solve(5);
// console.log(result);

// // Produce

// function seq() {
// 	let i = 0;
// 	return function () {
// 		return i++;
// 	};
// }
// let seq1 = seq();
// let seq2 = seq();

// console.log(seq1());
// console.log(seq1());
// console.log(seq2());
// // alert(seq1());
// // alert(seq1());
// // alert(seq2());

// // Pure and Impure Functions

// let x = 5;

// function multiplyByTwo(num) {
// 	return num * 2;
// }

// function addToX(num) {
// 	x += num;
// 	return x;
// }

// const result1 = multiplyByTwo(3);
// const result2 = addToX(4);

// console.log(result1);
// console.log(result2);

// // Understanding execution flow

// function alertResting(msg) {
// 	console.log(msg);
// }

// function gettingText() {
// 	return 'hello';
// }

// alertResting(gettingText());

// // Rex Plays Bynga

// let arr = [6, 5, 6, 7];

// let ans = [];

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = i; j < arr.length; j++) {
// 		i === j ? '' : arr[i] === arr[j] ? ans.push(2) : ans.push(1);
// 	}
// }

// console.log(ans);

// Armstrong function

function isArmstrong(n) {
	let original = n;
	let sum = 0;
	while (n > 0) {
		let rem = n % 10;
		n = Math.floor(n / 10);
		sum += rem * rem * rem;
	}
	return sum === original;
}

let arr = [153, 407, 876];

let output = [];

arr.forEach((value) =>
	isArmstrong(value)
		? output.push('It is an ARMSTRONG number')
		: output.push('It is NOT an ARMSTRONG number'),
);

console.log(output);
