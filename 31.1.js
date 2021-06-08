import React, { useState } from 'react'
import './App.css';

function App() {
	const [obj, setObj] = useState({
		prop1: 'value1',
		prop2: 'value2',
		prop3: 'value3',
	});

	return (
		<>
			<button onClick={() => setObj({ ...obj, ...{ prop1: '!' } })}>Change prop1</button>
			<button onClick={() => setObj({ ...obj, ...{ prop2: '!' } })}>Change prop2</button>
			<button onClick={() => setObj({ ...obj, ...{ prop3: '!' } })}>Change prop3</button>

			<p>Prop1: {obj.prop1}</p>
			<p>Prop2: {obj.prop2}</p>
			<p>Prop3: {obj.prop3}</p>
		</>
	)
}
export default App;






