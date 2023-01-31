import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import RestaurentList from './Components/RestaurentList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ViewRest from './Components/ViewRest'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={< RestaurentList />} />
          <Route path="/view-restaurants/:id" element={<ViewRest />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
