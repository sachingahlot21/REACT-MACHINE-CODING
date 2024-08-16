import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState("")

  function handleButton(string) {
    if (data.includes(string) && data.indexOf(string)!=0) {
      
      let index = data.indexOf(string)
      console.log(index)

      let newStr = data.slice(0, index) + data.slice(index, 3)
     
      setData(()=>string + '->' + newStr)

      return
    }
    if(data.indexOf(string)!=0){
      setData(data => data + string + "->")
    }
    
 
  }

  return (
    <>
      <button onClick={() => handleButton('A')}>A</button>
      <button onClick={() => handleButton('B')}>B</button>
      <button onClick={() => handleButton('C')}>C</button>
      <button onClick={() => handleButton('D')}>D</button>

      <div>{data}</div>
    </>
  )
}

export default App
