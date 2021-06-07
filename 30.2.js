import React, { useState } from 'react'
import './App.css';

function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
	const [num, setNum] = useState(null);
	const [value, setValue] = useState('');

	const result = notes.map((elem, index) => {
		return <li key={index} onClick={() => setNum(index)}>{elem}</li>
	})

	function changeHandler(e) {
		setValue(e.target.value);
		if (num) {
			setNotes([...notes.slice(0, num), e.target.value, ...notes.slice(num + 1)])
		}
	}

	function blurHandler(e) {
		if (!num) {
			setNotes([...notes, value]);
		} else {
			setNum(null)
		}

		setValue('')
	}

	return (
		<>
			<ul>
				{result}
			</ul>
			<input value={value} onChange={changeHandler} onBlur={blurHandler} />

		</>
	)
}

export default App;
