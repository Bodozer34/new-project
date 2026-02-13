import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TIimeTracking from './Components/TimeTracking'
import TimeTracking from './Components/TimeTracking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <TimeTracking/>
      
    </>
  )
}

export default App
