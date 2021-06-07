import React, { useState } from 'react'
import './App.css';

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [notes, setNotes] = useState(arr);

  let items = notes.map((item, index) => {
    return <div key={index}><input value={item} onChange={e => changeHandler(index, e)} /></div>
  })

  function getAvg(arg) {
    return (arg.reduce((a, b) => a + b) / arg.length).toFixed(2);
  }

  function changeHandler(index, e) {
    setNotes([...notes.slice(0, index), +e.target.value, ...notes.slice(index + 1)])
  }
  return (
    <>
      {items}
      <p>Avg: {getAvg(notes)} </p>
    </>
  );
}

export default App;






