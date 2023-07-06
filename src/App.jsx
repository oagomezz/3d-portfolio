import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, References, Hero, Navbar, Tech, Works, } from './components'

import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center' >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <References />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App