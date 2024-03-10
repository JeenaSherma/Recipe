import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

const App = () => {
  return (
   
<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
<Route path='home' element={<Home/>} >
</Route>
</Route>
    
</Routes>
</BrowserRouter>

  )
}

export default App