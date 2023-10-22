import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//pages
import Home from './Pages/Home'
import Login from './Pages/Login'

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />

          </Routes>
        </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App
