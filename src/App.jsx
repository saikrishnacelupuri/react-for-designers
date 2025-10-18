// This is the main component of the react application, so whole application is within this component

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import ConceptCard from './components/ConceptCard.jsx'
import 'remixicon/fonts/remixicon.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <ConceptCard/>

      <h1 className="text-2xl text-red-500">This is coming from main component App.jsx</h1>
    
    
    </>
  )
}

export default App
