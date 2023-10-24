import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//pages
import Home from './Pages/Home'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />} />
          </Routes>
        </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App
