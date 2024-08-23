import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  
  const handleAddTodo = () => {
    setTodos((prev) => [...prev, todo]) 
    setTodo(''); 
  };

  useEffect(() => {
    const todofromlh = JSON.parse(localStorage.getItem('todos')) || [];
    if (todofromlh && todofromlh.length > 0) {
      setTodos(todofromlh)
    }
    
  
  }, []);

  useEffect(() => {
    console.log("2nd ue" , todos)
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <>
      <div>
        <h2>TODOS</h2>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type='text'></input>
        <button onClick={handleAddTodo}>ADD TODO</button>
        <div>
          {
            todos.map((e) => (
              <h1>
                {e}
              
              </h1>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
