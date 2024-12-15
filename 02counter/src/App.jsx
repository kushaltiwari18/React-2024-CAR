import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = ()=>{

    // counter += 1
    // setCounter(counter+1);  // this five update will not update on UI
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);

    setCounter(prevCounter => (prevCounter< 20) ? prevCounter+1 : prevCounter);
    console.log("clicked", counter);
    
  }

  const removeValue = ()=>{
    setCounter(prevCounter => (prevCounter >0) ? prevCounter -1 : prevCounter);
    // setCounter(counter -1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button> <br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
