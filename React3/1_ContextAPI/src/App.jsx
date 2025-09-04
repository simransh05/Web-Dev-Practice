import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react'
let myContext = createContext(0);

function App() {
  let data = 5;
  return (
    <myContext.Provider value={data}>
      <Parent/>
    </myContext.Provider>

  )
}


function GrandChild() {
  let data = useContext(myContext)
  return <h2>Hello, {data}!</h2>;
}

function Child() {
  return <GrandChild />;
}

function Parent() {
  return <Child/>;
}

export default App
