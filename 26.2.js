import React, { useState } from 'react'
import './App.css';

function App() {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const [notes, setNotes] = useState(arr);
  const [value, setValue] = useState('');

  console.log(arr);
  console.log(notes);

  function handleBlur() {
    setNotes([...notes, value]);
    setValue('');
  }

  return (
    <>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} onBlur={handleBlur} />
      <ul>
        {notes.map((note, index) => {
          return <li key={index}>{note}</li>
        })}
      </ul>
    </>
  );
}

export default App;






