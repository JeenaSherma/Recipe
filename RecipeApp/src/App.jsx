import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Activity from './pages/Activity'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'

const App = () => {
  return (
   
<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
  <Route path='activity' element={<Activity/>}/>
<Route path='home' element={<Home/>}/>
<Route path='login' element={<Login/>}/>
<Route path='register' element={<Register/>}/>
</Route>
    
</Routes>
</BrowserRouter>

  )
}

export default App