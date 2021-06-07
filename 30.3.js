import React, { useState } from 'react'
import './App.css';

function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
	const [editNum, setEditNum] = useState(null);

	const result = notes.map((note, index) => {
		return <li key={index} onClick={() =>
			startEdit(index)}>{note}</li>;
	});

	function startEdit(index) {
		setEditNum(index);
	}
	function editItem(event) {
		setNotes([...notes.slice(0, editNum),
		event.target.value, ...notes.slice(editNum + 1)]);
	}
	function createItem() {
		if (!editNum) {
			const res = [...notes, ''];
			setNotes(res);
			setEditNum(res.length - 1);
		}
	}
	function stopEdit() {
		setEditNum(null);
	}

	return (
		<>
			<ul>
				{result}
			</ul>

			<input
				value={editNum ? notes[editNum] : ''}
				onChange={editItem}
				onFocus={createItem}
				onBlur={stopEdit}
			/>
		</>
	)
}
export default App;






