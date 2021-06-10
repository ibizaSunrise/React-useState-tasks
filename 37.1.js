import React, { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'


function App() {
    const initProds = [
        { id: nanoid(), name: 'prod1', catg: 'catg1', cost: 100 },
        { id: nanoid(), name: 'prod2', catg: 'catg2', cost: 200 },
        { id: nanoid(), name: 'prod3', catg: 'catg3', cost: 300 },
    ];

    const [prods, setProds] = useState(initProds);
    const [editId, setEditId] = useState(null);
    const [obj, setObj] = useState(getInitObj());

    function getInitObj() {
        return {
            id: nanoid(),
            name: '',
            catg: '',
            cost: ''
        }
    }

    function getValue(prop) {
        if (editId) {
            return prods.reduce((res, prod) => prod.id === editId ? prod[prop] : res, '');
        } else {
            return obj[prop];
        }

    }

    function changeItem(prop, e) {
        if (editId) {
            setProds(prods.map(prod => prod.id === editId ? { ...prod, [prop]: e.target.value } : prod));
        } else {
            setObj({ ...obj, [prop]: e.target.value });
        }

    }

    function saveItem() {
        if (editId) {
            setEditId(null);
        } else {
            setProds([...prods, obj]);
            setObj(getInitObj());
        }
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Category</th>
                        <th>Costs</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {prods.map(prod => {
                        return <tr key={prod.id}>
                            <td>{prod.name}</td>
                            <td>{prod.catg}</td>
                            <td>{prod.cost}</td>
                            <td><button onClick={() => setEditId(prod.id)}>Edit</button></td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
            
            <div><label>Prod name: <input value={getValue('name')} onChange={e => changeItem('name', e)} /></label></div>
            <div><label>Prod category: <input value={getValue('catg')} onChange={e => changeItem('catg', e)} /></label></div>
            <div><label>Prod cost: <input value={getValue('cost')} onChange={e => changeItem('cost', e)} /></label></div>

            <button onClick={saveItem}>Save</button>
        </>
    )
}
export default App;










