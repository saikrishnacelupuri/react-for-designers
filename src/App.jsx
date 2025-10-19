// This is the main component of the react application, so whole application is within this component

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import ConceptCard from './components/ConceptCard.jsx'
import 'remixicon/fonts/remixicon.css'
import CounterCart from './components/CounterCart.jsx'
import Accordion from './components/Accordion.jsx'
import ToggleSwitch from './components/ToggleSwitch.jsx'

function App() {


  return (
    <>
    <div className='flex flex-col gap-2'>
    <Header/>
    <Accordion/>
    <ToggleSwitch/>
    <CounterCart/>
    <ConceptCard title="Javascript Basics"/>

      <h1 className="text-2xl text-red-500">This is coming from main component App.jsx</h1>
    
      </div>
    </>
  )
}

export default App
