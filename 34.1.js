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

	function remItem(id) {
		setProds(prods.filter(prod => prod.id !== id))
	}

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Products</th>
						<th>Category</th>
						<th>Costs</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{prods.map(prod => {
						return <tr key={prod.id}>
							<td>{prod.name}</td>
							<td>{prod.catg}</td>
							<td>{prod.cost}</td>
							<td><button onClick={() => remItem(prod.id)}>Delete</button></td>
						</tr>
					})
					}
				</tbody>
			</table>
		</>
	)
}
export default App;










