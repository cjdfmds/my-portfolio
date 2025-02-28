import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from './components/Profile1'
import { Summary } from './components/Summary2'
import { Skills } from './components/Skills3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   

  <Profile />
  <Summary />
  <Skills />

    </>
  )
}

export default App
