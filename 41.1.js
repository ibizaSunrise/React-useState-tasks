import React, { useState } from 'react'
import './App.css';


function App() {
	const initNotes = [
		{ text: 'note1', isEdit: false },
		{ text: 'note2', isEdit: false },
		{ text: 'note3', isEdit: false },
	];

	const [notes, setNotes] = useState(initNotes);

	function startEdit(ind) {
		const copy = Object.assign([], notes);
		copy[ind].isEdit = true;
		setNotes(copy);
	}
	function endEdit(ind) {
		const copy = Object.assign([], notes);
		copy[ind].isEdit = false;
		setNotes(copy);
	}

	function changeNote(ind, e) {
		const copy = Object.assign([], notes);
		copy[ind].text = e.target.value;
		setNotes(copy);
	}

	const result = notes.map((note, index) => {
		if (!note.isEdit) {
			return <li key={index}>{note.text}<button onClick={() => startEdit(index)}>Edit</button></li>
		} else {
			return <li key={index}><input value={note.text} onChange={e => changeNote(index, e)} /><button onClick={() => endEdit(index)}>Show</button></li>
		}
	})

	return (
		<>
			<ul>
				{result}
			</ul>
		</>
	)
}
export default App;










