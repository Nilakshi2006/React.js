import React from 'react'
import { useState } from 'react'
import Navbar from './componenets/Navbar'
const App = () => {
  const [theme, setTheme] = useState('Light')
  return (
    <div>
      <p>Theme is {theme}</p>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
