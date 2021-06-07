import React, { useState } from 'react'
import './App.css';

function App() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    const index = 1;

    function handleClick() {
        setNotes([...notes.slice(0, index), '!', ...notes.slice(index + 1)]);
    }
    return (
        <>
            <button onClick={handleClick}>Change</button>
            {notes.map((note, index) => {
                return <p key={index}>{note}</p>
            })}
        </>
    );
}

export default App;