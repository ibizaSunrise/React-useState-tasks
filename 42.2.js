import React, { useState } from 'react'
import './App.css';
import { nanoid } from 'nanoid'

function App() {
	const initNotes = [
		{
			id: nanoid(),
			fields: [
				{
					name: 'prop1', value: 'value11', isEdit:
						false
				},
				{
					name: 'prop2', value: 'value12', isEdit:
						false
				},
				{
					name: 'prop3', value: 'value13', isEdit:
						false
				},
			]
		},
		{
			id: nanoid(),
			fields: [
				{
					name: 'prop1', value: 'value21', isEdit:
						false
				},
				{
					name: 'prop2', value: 'value22', isEdit:
						false
				},
				{
					name: 'prop3', value: 'value23', isEdit:
						false
				},
			]
		},
		{
			id: nanoid(),
			fields: [
				{
					name: 'prop1', value: 'value31', isEdit:
						false
				},
				{
					name: 'prop2', value: 'value32', isEdit:
						false
				},
				{
					name: 'prop3', value: 'value33', isEdit:
						false
				},
			]
		},
	];
	const [notes, setNotes] = useState(initNotes);
	
	function changeProp(id, name, prop, val) {
		setNotes(notes.map(note => {
			if (note.id === id) {
				const fields = note.fields.map(field => {
					if (field.name === name) {
						return { ...field, [prop]: val }
					} else {
						return field;
					}
				});

				return { id, fields };
			} else {
				return note;
			}
		}));
	}

	return (
		<>
			<table>
				<tbody>
					{notes.map(note => {
						return <tr key={note.id}>{
							note.fields.map(field => {
								return <td key={field.name}>{
									field.isEdit
										? <input value={field.value}
											onChange={e => changeProp(note.id, field.name, "value", e.target.value)}
											onBlur={() => changeProp(note.id, field.name, "isEdit", false)} />
										: <span onDoubleClick={() => changeProp(note.id, field.name, "isEdit", true)}>{field.value}</span>
								}</td>
							})
						}</tr>
					})}
				</tbody>
			</table>
		</>
	)
}
export default App;










