import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function decreaseHandler() {
    setCount(count - 1)
  }
  function increaseHandler() {
    setCount(count + 1)
  }
  function resetHandler() {
    setCount(0)
  }

  return (
    <div className="wrapper">
      <h1>Increment & Decrement</h1>
      <div className="display">
        <button onClick={decreaseHandler} className="btn1">
          -
        </button>
        <div className="count">{count}</div>
        <button onClick={increaseHandler} className="btn1">
          +
        </button>
      </div>
      <div>
        <button onClick={resetHandler} className="btn2">
          Reset
        </button>
      </div>
    </div>
  )
}
export default App
