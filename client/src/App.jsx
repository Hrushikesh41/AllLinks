import { useState } from 'react'
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
          <Route  path='/' element={<Dashboard />} />
          <Route  path='/npmCommand' element={<Npm />} />
          <Route  path='/gitCommands' element={<Git/>} />
          <Route  path='/projectsLink' element={<Projects />} />
          <Route  path='/socialLinks' element={<Social />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
