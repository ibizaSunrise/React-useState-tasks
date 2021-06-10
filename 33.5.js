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
	const id = 'JAmjRlfQT8rLTm5tG2m1L';
	const prop1 = 'prop2';
	const prop2 = 'prop3';
	console.log(notes)
	function handleClick() {
		setNotes(notes.map(note => {
			if (note.id === id) {
				return { ...note, [prop1]: note[prop1] + '!', [prop2]: note[prop2] + '!' }
			} else {
				return note;
			}
		}))
	}
	return (
		<>
			{notes.map(note => {
				return <p key={note.id}>
					<span>{note.prop1}</span>
					<span>{note.prop2}</span>
					<span>{note.prop3}</span>
				</p>
			})
			}

			<button onClick={handleClick}>Change</button>
		</>
	)
}
export default App;










