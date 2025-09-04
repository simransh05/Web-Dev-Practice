import { useEffect } from 'react';
import { useState } from 'react'
import { useRef } from "react";


function App() {
    let inputRef = useRef();
    let [title,setTitle] = useState("");
    function changeInput(value){
        inputRef.current= value
    }
    function showInput (){
        setTitle(inputRef);
    }
    return (
        <div>
            <input type="text" name="" id="" onChange={(e)=>changeInput(e.target.value)}/>
            <button onClick={showInput}>Add</button>
        </div>

    )
}

export default App
