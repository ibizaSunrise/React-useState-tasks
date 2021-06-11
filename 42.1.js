import React, { useState } from 'react'
import './App.css';
import {nanoid} from 'nanoid'

function App() {
	const initNotes = [
		{
			id: nanoid(),
			fields: [
				{name: 'prop1', value: 'value11', isEdit: 
					false}, 
				{name: 'prop2', value: 'value12', isEdit: 
					false}, 
				{name: 'prop3', value: 'value13', isEdit: 
					false}, 
			]
		},
		{
			id: nanoid(),
			fields: [
				{name: 'prop1', value: 'value21', isEdit: 
					false}, 
				{name: 'prop2', value: 'value22', isEdit: 
					false}, 
				{name: 'prop3', value: 'value23', isEdit: 
					false}, 
			]
		},
		{
			id: nanoid(),
			fields: [
				{name: 'prop1', value: 'value31', isEdit: 
					false}, 
				{name: 'prop2', value: 'value32', isEdit: 
					false}, 
				{name: 'prop3', value: 'value33', isEdit: 
					false}, 
			]
		},
	];
	const [notes, setNotes] = useState(initNotes);

	const rows = notes.map(note => {
		const cells = note.fields.map(field => {
			let elem;
			
			if (!field.isEdit) {
				elem = <span onClick={() => startEdit(
					note.id, field.name)}> 
					{field.value}
				</span>;
			} else {
				elem = <input
					value={field.value}
					onChange={(event) => changeCell(
						note.id, field.name, event)} 
					onBlur={() => endEdit(note.id, field.name)}
				/>;
			}
			
			return <td key={field.name}>{elem}</td>;
		});
		
		return <tr key={note.id}>{cells}</tr>;
	});
	
	function startEdit(id, name) {
		setNotes(notes.map(note => {
			if (note.id === id) {
				const fields = note.fields.map(field => {
					if (field.name === name) {
						return {...field, isEdit: true}
					} else {
						return field;
					}
				});
				
				return {id, fields};
			} else {
				return note;
			}
		}));
	}
	
	function endEdit(id, name) {
		setNotes(notes.map(note => {
			if (note.id === id) {
				const fields = note.fields.map(field => {
					if (field.name === name) {
						return {...field, isEdit: false}
					} else {
						return field;
					}
				});
				
				return {id, fields};
			} else {
				return note;
			}
		}));
	}
	
	function changeCell(id, name, event) {
		setNotes(notes.map(note => {
			if (note.id === id) {
				const fields = note.fields.map(field => {
					if (field.name === name) {
						return {...field, value: event.target.value}
					} else {
						return field;
					}
				});
				
				return {id, fields};
			} else {
				return note;
			}
		}));
	}

	return (
		<>
			<table>
				<tbody>
					{rows}
				</tbody>
			</table>
		</>
	)
}
export default App;










