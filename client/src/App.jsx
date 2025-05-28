import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './components/Dashboard'
import Signin from './pages/Signin'
import Login from './pages/Login'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path=':projectId' element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
