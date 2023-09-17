import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Components/Navber/Navber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-2xl'>Vite + React</h1>
    <Navber></Navber>

     
    </>
  )
}

export default App
