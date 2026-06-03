import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidenavbar'

import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

const App = () => {
  return (
    <BrowserRouter>

      <div className='flex bg-[#0f172a] text-white min-h-screen'>

        <Sidebar />

        <div className='flex-1'>

          <Navbar />

          <div className='p-6'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/users' element={<Users />} />
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App