import React, { useState } from 'react'
import './App.css';


function App() {
	const [value, setValue] = useState("Hello");
	const [edit, setEdit] = useState(false);
	return (
		<>
			<p>{edit ? <input value = {value} onChange = {(e) => setValue(e.target.value)}/> : value}</p>
			<button onClick = {() => setEdit (true)}>Edit</button>
			<button onClick = {() => setEdit (false)}>Show</button>
		</>
	)
}
export default App;
