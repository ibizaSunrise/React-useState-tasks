import React, { useState } from 'react'
import './App.css';

function App() {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const [notes, setNotes] = useState(arr);

    function removeItem(index) {
        setNotes([...notes.slice(0, index), ...notes.slice(index + 1)])
    }
    return (
        <>
            <ul>
                {notes.map((item, index) => <li key={index}>{item} <button onClick={() => removeItem(index)}>X</button></li>)}
            </ul>
        </>
    );
}

export default App;
