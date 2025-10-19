// This is the main component of the react application, so whole application is within this component

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import ConceptCard from './components/ConceptCard.jsx'
import 'remixicon/fonts/remixicon.css'
import CounterCart from './components/CounterCart.jsx'

function App() {


  return (
    <>
    <Header/>
    <CounterCart/>
    <ConceptCard title="Javascript Basics"/>

      <h1 className="text-2xl text-red-500">This is coming from main component App.jsx</h1>
    
    
    </>
  )
}

export default App
