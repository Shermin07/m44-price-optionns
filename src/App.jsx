import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Components/Navber/Navber'
import Priceloptions from './Components/Pricelist/Priceloptions'
import Linecharts from './Components/Linecharts/Linecharts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
    <Navber className = 'flex'></Navber>

    <Priceloptions></Priceloptions>
    <Linecharts></Linecharts>
    </>
  )
}

export default App
