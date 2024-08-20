import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaStar } from "react-icons/fa";
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  return (
   <>
   <div>
    <div onClick={()=>setCount(1)}>
      {
        count >= 1 ? 
        <FaStar style={{color:"red"}} /> 
        :
        <FaStar  /> 
      }
   
    </div>
    <div onClick={()=>setCount(2)}>
    {
        count >= 2 ? 
        <FaStar style={{color:"red"}} /> 
        :
        <FaStar  /> 
      }
    </div>
    <div onClick={()=>setCount(3)}>
    {
        count >=3  ? 
        <FaStar style={{color:"red"}} /> 
        :
        <FaStar  /> 
      }
    </div>
    <div onClick={()=>setCount(4)}>
    {
        count >=4 ? 
        <FaStar style={{color:"red"}} /> 
        :
        <FaStar  /> 
      }
    </div>
    <div onClick={()=>setCount(5)}>
    {
        count >= 5 ? 
        <FaStar style={{color:"red"}} /> 
        :
        <FaStar  /> 
      }
    </div>
   </div>
   </>
  )
}

export default App
