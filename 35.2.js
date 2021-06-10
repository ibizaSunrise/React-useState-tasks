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
	const [name, setName] = useState('');
	const [catg, setCatg] = useState('');
	const [cost, setCost] = useState('');

	function addGoods() {
		let myObj = {
			id: nanoid(),
			name,
			catg,
			cost
		}
		setProds([...prods, myObj]);
		setName('');
		setCatg('');
		setCost('');
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
			<div><label>Prod name: <input value={name} onChange={(e) => setName(e.target.value)} /></label></div>
			<div><label>Prod category: <input value={catg} onChange={(e) => setCatg(e.target.value)} /></label></div>
			<div><label>Prod cost: <input value={cost} onChange={(e) => setCost(e.target.value)} /></label></div>

			<button onClick={addGoods}>Add Goods</button>
		</>
	)
}
export default App;










