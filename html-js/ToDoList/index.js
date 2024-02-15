let input = document.getElementById('input');
let btn = document.getElementById('btn');
let list = document.getElementById('ul');

btn.addEventListener('click', addToLocalStorage);

// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

function addToLocalStorage() {
	let task = input.value.trim();

	if (task !== '') {
		let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
		tasks.push(task);
		localStorage.setItem('tasks', JSON.stringify(tasks));
		renderTasks();
		input.value = ''; // Clear the input field after adding a task
	}
}

function loadTasks() {
	let storedData = localStorage.getItem('tasks');
	let tasks = [];
	if (storedData === undefined) {
		tasks = [];
	} else {
		tasks = storedData;
		tasks.forEach((task) => {
			list.innerHTML += `<li>${task} <button id="removeBtn">X</button></li>`;
		});
	}

	// Add event listeners for remove buttons after loading tasks
	addRemoveListeners();
}

function renderTasks() {
	list.innerHTML = '';
	loadTasks();
}

function addRemoveListeners() {
	let removeButtons = document.querySelectorAll('.removeBtn');
	removeButtons.forEach((button) => {
		button.addEventListener('click', removeFromLocalStorage);
	});
}

function removeFromLocalStorage() {
	let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	let taskToRemove = this.parentNode.textContent.trim();
	tasks = tasks.filter((task) => task !== taskToRemove);
	localStorage.setItem('tasks', JSON.stringify(tasks));
	renderTasks();
}
