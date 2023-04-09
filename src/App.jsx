import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './components/Buttons1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>How old are you?</h1>
      <Buttons />
    </div>
  )
}

export default App
