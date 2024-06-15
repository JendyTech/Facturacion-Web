import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '@/styles/MainDesign/App.css'
import Navbar from '@/Pages/MainLayout/Navbar'
import Sidebar from '@/Pages/MainLayout/Sidebar'
import Home from '@/Pages/Home/Home'
import Settings from '@/Pages/Settings/Settings'
import Reports from '@/Pages/Reports/Reports'
import Products from '@/Pages/Products/Products'
import Invoice from '@/Pages/Invoice/Invoice'
import Clients from '@/Pages/Clients/Clients'



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
