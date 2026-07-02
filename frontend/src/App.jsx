import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllTaskDetails from './components/AllTaskDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllTaskDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App