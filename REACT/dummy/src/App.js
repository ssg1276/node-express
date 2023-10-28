import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [name, setName] = useState('guleria')
  //variation-1   ----> renders after everychange
  // useEffect(() => {
  //   console.log('hey sahil')
  // })

  //variation-2   -----> first render only
  // useEffect(() => {
  //   console.log('hey everyone')
  // }, [])

  //variation-3  -->first render + whenever dependency changes
  // useEffect(() => {
  //   console.log('rock n roll')
  // }, [name])

  //variation-4 ---> to handle unmounting of a component
  useEffect(() => {
    //add event listener
    console.log('listener added')
    return () => {
      console.log('listener removed')
    }
  }, [text])

  function changeHandler(event) {
    console.log(text)
    setText(event.target.value)
  }
  return <input type="text" onChange={changeHandler}></input>
}

export default App
