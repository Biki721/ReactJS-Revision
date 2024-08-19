import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  
  const handleAdd = () => {
    if (counter < 20){
      setCounter(counter + 1)
    }
  }

  const handleRemove = () => {
    if (counter >0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button type="button" onClick={handleAdd}>Add Value {counter}</button>
      <br />
      <button type="button" onClick={handleRemove}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
