import React, { useState } from 'react'
import './App.css';

function App() {
	const initNotes = [
		{
			id: 'GYi9G_uC4gBF1e2SixDvu',
			prop1: 'value11',
			prop2: 'value12',
			prop3: 'value13',
		},
		{
			id: 'IWSpfBPSV3SXgRF87uO74',
			prop1: 'value21',
			prop2: 'value22',
			prop3: 'value23',
		},
		{
			id: 'JAmjRlfQT8rLTm5tG2m1L',
			prop1: 'value31',
			prop2: 'value32',
			prop3: 'value33',
		},
	];
	const [notes, setNotes] = useState(initNotes);
	const id = 'IWSpfBPSV3SXgRF87uO74';
	const result = notes.map(note => {
		return <p key={note.id}>
			<span>{note.prop1} </span>
			<span>{note.prop2} </span>
			<span>{note.prop3} </span>
		</p>
	})

	function handleClick() {
		setNotes(notes.filter(note => note.id !== id))
	}

	return (
		<>
			{result}
			<button onClick={handleClick}>Delite</button>
		</>
	)
}
export default App;










