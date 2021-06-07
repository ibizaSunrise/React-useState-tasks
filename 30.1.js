import React, { useState } from 'react'
import './App.css';

function App() {
    const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
    const [editNum, setEditNum] = useState(null);
    const [value, setValue] = useState('');

    const result = notes.map((note, index) => {
        return <li key={index} onClick={() =>
            setEditNum(index)}>
            {note}
        </li>;
    });

    function changeItem(event) {
        setNotes([...notes.slice(0, editNum),
        event.target.value, ...notes.slice(editNum + 1)]);
    }
    function stopEdit(event) {
        setEditNum(null);
    }

    function changeValue(event) {
        setValue(event.target.value)
    }
    function addItem(event) {
        setNotes([...notes, value]);
    }

    let input;
    if (editNum || editNum === 0) {
        input = <input
            value={notes[editNum]}
            onChange={changeItem}
            onBlur={stopEdit}
        />
    } else {
        input = <input
            value={value}
            onChange={changeValue}
            onBlur={addItem}
        />
    }

    return (
        <>
            <ul>
                {result}
            </ul>

            {input}
        </>

    )
}
export default App;






