import React, { useState } from 'react'
import './App.css';

function App() {
  const arr = [9, 8, 3, 4, 5, 2, 1];
  const [notes, setNotes] = useState(arr);

  console.log(arr);
  console.log(notes);

  function handleClick() {
    setNotes([...notes.sort()])

  }
  return (
    <>
      <button onClick={handleClick}>Sort</button>
      {notes.map((note, index) => {
        return <p key={index}>{note}</p>
      })}
    </>
  );
}

export default App;






