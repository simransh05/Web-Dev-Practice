import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react'
let gold = createContext();

function GrandParent(){
    let info = 'secret info';
    return (
        <div>
            Grand Parent
            <gold.Provider value={info}>
                <Parent/>
            </gold.Provider>
        </div>
    )
}

function Parent(){
    return (
        <div>
            Parent
            <Child/>
        </div>
    )
}


function Child(){
    let Val = useContext(gold)
    return (
        <div>
            child : {Val}
        </div>
    )
}

export default GrandParent
