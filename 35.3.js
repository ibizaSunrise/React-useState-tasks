import React, { useState } from 'react'
import './App.css';
import { nanoid } from 'nanoid'


function App() {
	const initProds = [
		{ id: nanoid(), name: 'prod1', catg: 'catg1', cost: 100 },
		{ id: nanoid(), name: 'prod2', catg: 'catg2', cost: 200 },
		{ id: nanoid(), name: 'prod3', catg: 'catg3', cost: 300 },
	];
	const [prods, setProds] = useState(initProds);
	const [obj, setObj] = useState(getInitObj());

	function getInitObj() {
		return {
			id: nanoid(),
			name: '',
			catg: '',
			cost: ''
		}
	}

	function changeProp(prop, event) {
		setObj({ ...obj, [prop]: event.target.value });
	}

	function addGoods() {
		setProds([...prods, obj]);
		setObj(getInitObj());
	}

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Products</th>
						<th>Category</th>
						<th>Costs</th>
					</tr>
				</thead>
				<tbody>
					{prods.map(prod => {
						return <tr key={prod.id}>
							<td>{prod.name}</td>
							<td>{prod.catg}</td>
							<td>{prod.cost}</td>
						</tr>
					})
					}
				</tbody>
			</table>
			<div><label>Prod name: <input value={obj.name} onChange={(e) => changeProp('name', e)} /></label></div>
			<div><label>Prod category: <input value={obj.catg} onChange={(e) => changeProp('catg', e)} /></label></div>
			<div><label>Prod cost: <input value={obj.cost} onChange={(e) => changeProp('cost', e)} /></label></div>

			<button onClick={addGoods}>Add Goods</button>
		</>
	)
}
export default App;










