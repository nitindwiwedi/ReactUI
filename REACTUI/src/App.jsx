import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Tech_innovators } from './Components/Tech_innovators'
import { AI_Screen } from './Components/AI_Screen'
import { OurProduct } from './Components/OurProduct'
import {Trusted_Partners} from './Components/Trusted_Partners'
import { Industries_work } from './Components/Industries_work'
import { Technology_Stack } from './Components/Technology_Stack'
import { Footer } from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Navbar />
      <Home />
      <Tech_innovators />
      <AI_Screen/>
      <OurProduct/>
      <Industries_work/>
      <Trusted_Partners/>
      <Technology_Stack/>
      <Footer/>
    </div>
  )
}

export default App
