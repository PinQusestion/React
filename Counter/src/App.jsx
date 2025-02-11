import { useState } from 'react';
import './App.css'

function App() {
  let [count,setCount] = useState(0)
  const addCount = () => {
    console.log("Incremented")
    setCount(count + 1)
  }
  const reduceCount = () => {
    console.log("Decremented")
    setCount(count - 1)
  }
  return (
    <>
      <h2>Counter:{count}</h2>
      <button onClick={addCount}>Add Count</button>
      <button onClick={reduceCount}>Reduce Count</button>
    </>
  )
}

export default App
