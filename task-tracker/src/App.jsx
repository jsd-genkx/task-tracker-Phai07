import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



  function App() {
  const [tasks, settasks] = useState([]);
  

      function whenClick(newTask) {
       settasks(task2 => [...task2, newTask])

      }

  return (
    <>
      <div>
      <h1 className="text-3xl font-bold  text-teal-400 p-7">
      Task Tracker 04
      </h1>
      <div>
      <input className='text-white text-2xl  '/>
      <button> Add </button>
      </div>
     
      </div>
     
    </>
  )
}

export default App
