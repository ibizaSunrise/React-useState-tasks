import React, { useState } from 'react'
import './App.css';

function App() {
	const [notes, setNotes] = useState(
		[1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null);

	const result = notes.map((note, index) => {
		return <p key={index} onClick={() =>
			setEditNum(index)}>
			{note}
		</p>;
	});

	function changeItem(event) {
		setNotes([...notes.slice(0, editNum),
		event.target.value, ...notes.slice(editNum + 1)]);
	}

	return <div>
		{result}
		<input value={editNum === 0 || editNum ? notes[editNum] : ''} onChange={changeItem} onBlur={() => setEditNum('')} />
	</div>;
}

export default App;
