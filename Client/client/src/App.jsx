import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodoItem from './components/AddTodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <div className='mt-32'>
      <AddTodoItem/>
      </div>
    </div>
  )
}

export default App
