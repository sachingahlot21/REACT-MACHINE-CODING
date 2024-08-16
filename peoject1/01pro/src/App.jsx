import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  const[marginLeft , setmarginLeft]= useState(0)
 
  const handlePrev= ()=>{
    const newMargin = marginLeft+900
    if(marginLeft === 0){
      console.log(marginLeft ,"1nm:",  newMargin)
      setmarginLeft(-1800)
      
      
    }
    else{
      console.log(marginLeft ,"2nm:",  newMargin)
      setmarginLeft(newMargin)
      console.log(marginLeft)
     
    }
   
  }
  const handleNext = ()=>{
    const newMargin = marginLeft-900
    if(marginLeft > -1800){
      setmarginLeft(newMargin)
    }
    else{
      setmarginLeft(0)
    }
   
  }

  return (
    <>
      <p>NETFLIX</p>
      <button onClick={handlePrev}>
        PREVIOUS
      </button>
      <div className='mainDiv'>
        <div className='Cdiv' style={{marginLeft:`${marginLeft}px`}}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
      </div>

      <button onClick={handleNext}>
        NEXT
      </button>
    </>
  )
}

export default App
