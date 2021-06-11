import React, { useState } from 'react'
import './App.css';

function App() {
    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    return (
        <>
            <button onClick={() => setVisible(!visible)}>{visible ? 'hide' : 'show'}</button>
            <button onClick={() => setVisible1(!visible1)}>{visible1 ? 'hide' : 'show'}</button>
            <button onClick={() => setVisible2(!visible2)}>{visible2 ? 'hide' : 'show'}</button>

            {visible && <p>text1</p>}
            {visible1 && <p>text2</p>}
            {visible2 && <p>text3</p>}
        </>
    )
}
export default App;










