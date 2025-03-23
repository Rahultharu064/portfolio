import React from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import About from './Pages/Abouts'
import Abouts from './Pages/Abouts'
import Projects from './Pages/Projectsp'
import Projectsp from './Pages/Projectsp'
import Skillsp from './Pages/Skillsp'
import Contractus from './Pages/Contractus'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/abouts" element={<Abouts />} />
        <Route path="/Projectsp" element={<Projectsp />} />
        <Route path="/Skillsp" element={<Skillsp />} />
        <Route path='/Contractus' element={<Contractus />}/>


        
        

       
        
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
