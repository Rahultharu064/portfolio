import React from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import About from './Pages/About'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />}/>
        
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
