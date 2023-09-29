import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './Components/Pages/Home'
import { Charts } from './Components/Pages/Charts'
import { Share } from './Components/Pages/Share'

const AppRouter = () => {
  return (
    
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/charts' element={<Charts/>}/>
            <Route path='/share' element={<Share/>}/>
        </Routes>
    
  )
}

export default AppRouter