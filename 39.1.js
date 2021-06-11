import React, { useState } from 'react'
import './App.css';
import { nanoid } from 'nanoid'



function App() {
	const initProds = [
		{
			id: nanoid(),
			name: 'prod1',
			cost: 'cost1',
			desc: 'long description 1',
			comm: 'my super comment 1',
			showDesc: false,
			showComm: false
		},
		{
			id: nanoid(),
			name: 'prod2',
			desc: 'long description 2',
			comm: 'my super comment 2',
			showDesc: false,
			showComm: false
		},
		{
			id: nanoid(),
			name: 'prod3',
			desc: 'long description 3',
			comm: 'my super comment 3',
			showDesc: false,
			showComm: false
		},
	];

	const [prods, setProds] = useState(initProds);

	function showDesc(id) {
		setProds(prods.map(prod => prod.id === id ? { ...prod, showDesc: !prod.showDesc } : prod))
	}

	function showComm(id) {
		setProds(prods.map(prod => prod.id === id ? { ...prod, showComm: !prod.showComm } : prod))
	}

	return (
		<>
			<ul>
				{prods.map(prod => {
					return <li key={prod.id}>
						{prod.name} <button onClick={() => showDesc(prod.id)}>
							{prod.showDesc ? 'Hide Desc' : 'Show Desc'}
						</button> {prod.showDesc && prod.desc} <button onClick={() => showComm(prod.id)}>
							{prod.showComm ? 'Hide Comm' : 'Show Comm'}
						</button> {prod.showComm && prod.comm}
					</li>
				})}
			</ul>
		</>
	)
}
export default App;










