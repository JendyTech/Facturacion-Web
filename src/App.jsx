import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '@/styles/MainDesign/App.css'
import Navbar from '@/components/MainLayout/Navbar'
import Sidebar from '@/components/MainLayout/Sidebar'
import Home from '@/components/Home/Home'
import Settings from '@/components/Settings/Settings'
import Reports from '@/components/Reports/Reports'
import Products from '@/components/Products/Products'
import Invoice from '@/components/Invoice/Invoice'
import Clients from '@/components/Clients/Clients'



function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
