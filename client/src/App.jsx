import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard'
import Git from './pages/Git/Git'
import Npm from './pages/Npm/Npm'
import Projects from './pages/Projects/Projects'
import Social from './pages/Social/Social'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/npmCommand' element={<Npm />} />
          <Route exact path='/gitCommands' element={<Git/>} />
          <Route exact path='/projectsLink' element={<Projects />} />
          <Route exact path='/socialLinks' element={<Social />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App