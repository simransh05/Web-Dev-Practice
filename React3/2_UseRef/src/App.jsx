import { useEffect } from 'react';
import { useState } from 'react'
import { useRef } from "react";


function App() {
    let [cnt, setCnt] = useState(0);
    let useReference = useRef();
    useEffect(() => {
        console.log('render')
        let id = setInterval(() => {
            console.log('hi')
        }, 1000)
        useReference.current = id
    },[])

    function stop() {
        clearInterval(useReference.current);
    }
    return (
        <div>
            <h1>{cnt}</h1>
            <button onClick={() => setCnt(cnt + 1)}>increase</button>
            <button onClick={stop}>Stop</button>
        </div>

    )
}

export default App
