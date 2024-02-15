import React, { useState } from 'react';
import './Todo.css';

function Todo() {
	const [list, setList] = useState([]);
	const [task, setTask] = useState('');

	const addTask = () => {
		if (task.trim() !== '') {
			setList([...list, task]);
			setTask('');
		}
	};

	const removeTask = (index) => {
		const newList = [...list];
		newList.splice(index, 1);
		setList(newList);
	};

	return (
		<div className="Todo">
			<h1>Todo App</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addTask();
				}}>
				<input
					type="text"
					value={task}
					onChange={(e) => setTask(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			<ul>
				{list.map((t, index) => (
					<li key={index}>
						{t} <button onClick={() => removeTask(index)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Todo;
